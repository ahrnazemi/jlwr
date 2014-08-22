package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.NotStrictlyPositiveException;

public class TDistribution extends AbstractRealDistribution {
	public static final double DEFAULT_INVERSE_ABSOLUTE_ACCURACY = 1.E-009D;
	private static final long serialVersionUID = -5852615386664158222L;
	private final double degreesOfFreedom;
	private final double solverAbsoluteAccuracy;

	public TDistribution(double degreesOfFreedom, double inverseCumAccuracy)
			throws NotStrictlyPositiveException {
		if (degreesOfFreedom <= 0.0D) {
			throw new NotStrictlyPositiveException(
					LocalizedFormats.DEGREES_OF_FREEDOM,
					Double.valueOf(degreesOfFreedom));
		}

		this.degreesOfFreedom = degreesOfFreedom;
		this.solverAbsoluteAccuracy = inverseCumAccuracy;
	}

	public TDistribution(double degreesOfFreedom)
			throws NotStrictlyPositiveException {
		this(degreesOfFreedom, 1.E-009D);
	}

	public double getDegreesOfFreedom() {
		return this.degreesOfFreedom;
	}

	public double probability(double x) {
		return 0.0D;
	}

	public double density(double x) {
		double n = this.degreesOfFreedom;
		double nPlus1Over2 = (n + 1.0D) / 2.0D;
		return FastMath.exp(Gamma.logGamma(nPlus1Over2)
				- (0.5D * (FastMath.log(3.141592653589793D) + FastMath.log(n)))
				- Gamma.logGamma(n / 2.0D)
				- (nPlus1Over2 * FastMath.log(1.0D + x * x / n)));
	}

	public double cumulativeProbability(double x) {
		double ret;
		if (x == 0.0D) {
			ret = 0.5D;
		} else {
			double t = Beta.regularizedBeta(this.degreesOfFreedom
					/ (this.degreesOfFreedom + x * x),
					0.5D * this.degreesOfFreedom, 0.5D);
			if (x < 0.0D)
				ret = 0.5D * t;
			else {
				ret = 1.0D - (0.5D * t);
			}
		}

		return ret;
	}

	protected double getSolverAbsoluteAccuracy() {
		return this.solverAbsoluteAccuracy;
	}

	public double getNumericalMean() {
		double df = getDegreesOfFreedom();

		if (df > 1.0D) {
			return 0.0D;
		}

		return (0.0D / 0.0D);
	}

	public double getNumericalVariance() {
		double df = getDegreesOfFreedom();

		if (df > 2.0D) {
			return (df / (df - 2.0D));
		}

		if ((df > 1.0D) && (df <= 2.0D)) {
			return (1.0D / 0.0D);
		}

		return (0.0D / 0.0D);
	}

	public double getSupportLowerBound() {
		return (-1.0D / 0.0D);
	}

	public double getSupportUpperBound() {
		return (1.0D / 0.0D);
	}

	public boolean isSupportLowerBoundInclusive() {
		return false;
	}

	public boolean isSupportUpperBoundInclusive() {
		return false;
	}

	public boolean isSupportConnected() {
		return true;
	}
}