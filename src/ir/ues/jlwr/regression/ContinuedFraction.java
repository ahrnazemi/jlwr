package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.ConvergenceException;
import ir.ues.jlwr.regression.exception.MaxCountExceededException;

public abstract class ContinuedFraction {
	private static final double DEFAULT_EPSILON = 1.0E-008D;


	protected abstract double getA(int paramInt, double paramDouble);

	protected abstract double getB(int paramInt, double paramDouble);

	public double evaluate(double x) {
		return evaluate(x, 1.0E-008D, 2147483647);
	}

	public double evaluate(double x, double epsilon) {
		return evaluate(x, epsilon, 2147483647);
	}

	public double evaluate(double x, int maxIterations) {
		return evaluate(x, 1.0E-008D, maxIterations);
	}

	public double evaluate(double x, double epsilon, int maxIterations) {
		double p0 = 1.0D;
		double p1 = getA(0, x);
		double q0 = 0.0D;
		double q1 = 1.0D;
		double c = p1 / q1;
		int n = 0;
		double relativeError = 1.7976931348623157E+308D;
		while ((n < maxIterations) && (relativeError > epsilon)) {
			++n;
			double a = getA(n, x);
			double b = getB(n, x);
			double p2 = a * p1 + b * p0;
			double q2 = a * q1 + b * q0;
			boolean infinite = false;
			if ((Double.isInfinite(p2)) || (Double.isInfinite(q2))) {
				double scaleFactor = 1.0D;
				double lastScaleFactor = 1.0D;
				int maxPower = 5;
				double scale = FastMath.max(a, b);
				if (scale <= 0.0D) {
					throw new ConvergenceException(
							LocalizedFormats.CONTINUED_FRACTION_INFINITY_DIVERGENCE,
							new Object[] { Double.valueOf(x) });
				}

				infinite = true;
				for (int i = 0; i < 5; ++i) {
					lastScaleFactor = scaleFactor;
					scaleFactor *= scale;
					if ((a != 0.0D) && (a > b)) {
						p2 = p1 / lastScaleFactor + b / scaleFactor * p0;
						q2 = q1 / lastScaleFactor + b / scaleFactor * q0;
					} else if (b != 0.0D) {
						p2 = a / scaleFactor * p1 + p0 / lastScaleFactor;
						q2 = a / scaleFactor * q1 + q0 / lastScaleFactor;
					}
					infinite = (Double.isInfinite(p2))
							|| (Double.isInfinite(q2));
					if (!(infinite)) {
						break;
					}
				}
			}

			if (infinite) {
				throw new ConvergenceException(
						LocalizedFormats.CONTINUED_FRACTION_INFINITY_DIVERGENCE,
						new Object[] { Double.valueOf(x) });
			}

			double r = p2 / q2;

			if (Double.isNaN(r)) {
				throw new ConvergenceException(
						LocalizedFormats.CONTINUED_FRACTION_NAN_DIVERGENCE,
						new Object[] { Double.valueOf(x) });
			}

			relativeError = FastMath.abs(r / c - 1.0D);

			c = p2 / q2;
			p0 = p1;
			p1 = p2;
			q0 = q1;
			q1 = q2;
		}

		if (n >= maxIterations) {
			throw new MaxCountExceededException(
					LocalizedFormats.NON_CONVERGENT_CONTINUED_FRACTION,
					Integer.valueOf(maxIterations),
					new Object[] { Double.valueOf(x) });
		}

		return c;
	}
}