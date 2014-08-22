package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.NoBracketingException;
import ir.ues.jlwr.regression.exception.NotStrictlyPositiveException;
import ir.ues.jlwr.regression.exception.NullArgumentException;
import ir.ues.jlwr.regression.exception.NumberIsTooLargeException;

public class UnivariateSolverUtils {
	public static double solve(UnivariateFunction function, double x0, double x1) {
		if (function == null) {
			throw new NullArgumentException(LocalizedFormats.FUNCTION,
					new Object[0]);
		}
		UnivariateSolver solver = new BrentSolver();
		return solver.solve(2147483647, function, x0, x1);
	}

	public static double solve(UnivariateFunction function, double x0,
			double x1, double absoluteAccuracy) {
		if (function == null) {
			throw new NullArgumentException(LocalizedFormats.FUNCTION,
					new Object[0]);
		}
		UnivariateSolver solver = new BrentSolver(absoluteAccuracy);
		return solver.solve(2147483647, function, x0, x1);
	}

	public static double forceSide(int maxEval, UnivariateFunction f,
			BracketedUnivariateSolver<UnivariateFunction> bracketing,
			double baseRoot, double min, double max,
			AllowedSolution allowedSolution) {
		if (allowedSolution == AllowedSolution.ANY_SIDE) {
			return baseRoot;
		}

		double step = FastMath.max(bracketing.getAbsoluteAccuracy(),
				FastMath.abs(baseRoot * bracketing.getRelativeAccuracy()));

		double xLo = FastMath.max(min, baseRoot - step);
		double fLo = f.value(xLo);
		double xHi = FastMath.min(max, baseRoot + step);
		double fHi = f.value(xHi);
		int remainingEval = maxEval - 2;
		while (remainingEval > 0) {
			if (((fLo >= 0.0D) && (fHi <= 0.0D))
					|| ((fLo <= 0.0D) && (fHi >= 0.0D))) {
				return bracketing.solve(remainingEval, f, xLo, xHi, baseRoot,
						allowedSolution);
			}

			boolean changeLo = false;
			boolean changeHi = false;
			if (fLo < fHi) {
				if (fLo >= 0.0D)
					changeLo = true;
				else
					changeHi = true;
			} else if (fLo > fHi) {
				if (fLo <= 0.0D)
					changeLo = true;
				else
					changeHi = true;
			} else {
				changeLo = true;
				changeHi = true;
			}

			if (changeLo) {
				xLo = FastMath.max(min, xLo - step);
				fLo = f.value(xLo);
				--remainingEval;
			}

			if (changeHi) {
				xHi = FastMath.min(max, xHi + step);
				fHi = f.value(xHi);
				--remainingEval;
			}

		}

		throw new NoBracketingException(LocalizedFormats.FAILED_BRACKETING,
				xLo, xHi, fLo, fHi, new Object[] {
						Integer.valueOf(maxEval - remainingEval),
						Integer.valueOf(maxEval), Double.valueOf(baseRoot),
						Double.valueOf(min), Double.valueOf(max) });
	}

	public static double[] bracket(UnivariateFunction function, double initial,
			double lowerBound, double upperBound) {
		return bracket(function, initial, lowerBound, upperBound, 2147483647);
	}

	public static double[] bracket(UnivariateFunction function, double initial,
			double lowerBound, double upperBound, int maximumIterations) {
		if (function == null) {
			throw new NullArgumentException(LocalizedFormats.FUNCTION,
					new Object[0]);
		}
		if (maximumIterations <= 0) {
			throw new NotStrictlyPositiveException(
					LocalizedFormats.INVALID_MAX_ITERATIONS,
					Integer.valueOf(maximumIterations));
		}
		verifySequence(lowerBound, initial, upperBound);

		double a = initial;
		double b = initial;

		int numIterations = 0;
		double fa;
		double fb;
		do {
			a = FastMath.max(a - 1.0D, lowerBound);
			b = FastMath.min(b + 1.0D, upperBound);
			fa = function.value(a);

			fb = function.value(b);
			++numIterations;
		} while ((fa * fb > 0.0D) && (numIterations < maximumIterations)
				&& (((a > lowerBound) || (b < upperBound))));

		if (fa * fb > 0.0D) {
			throw new NoBracketingException(LocalizedFormats.FAILED_BRACKETING,
					a, b, fa, fb, new Object[] {
							Integer.valueOf(numIterations),
							Integer.valueOf(maximumIterations),
							Double.valueOf(initial),
							Double.valueOf(lowerBound),
							Double.valueOf(upperBound) });
		}

		return new double[] { a, b };
	}

	public static double midpoint(double a, double b) {
		return ((a + b) * 0.5D);
	}

	public static boolean isBracketing(UnivariateFunction function,
			double lower, double upper) {
		if (function == null) {
			throw new NullArgumentException(LocalizedFormats.FUNCTION,
					new Object[0]);
		}
		double fLo = function.value(lower);
		double fHi = function.value(upper);
		return (((fLo >= 0.0D) && (fHi <= 0.0D)) || ((fLo <= 0.0D) && (fHi >= 0.0D)));
	}

	public static boolean isSequence(double start, double mid, double end) {
		return ((start < mid) && (mid < end));
	}

	public static void verifyInterval(double lower, double upper) {
		if (lower >= upper)
			throw new NumberIsTooLargeException(
					LocalizedFormats.ENDPOINTS_NOT_AN_INTERVAL,
					Double.valueOf(lower), Double.valueOf(upper), false);
	}

	public static void verifySequence(double lower, double initial, double upper) {
		verifyInterval(lower, initial);
		verifyInterval(initial, upper);
	}

	public static void verifyBracketing(UnivariateFunction function,
			double lower, double upper) {
		if (function == null) {
			throw new NullArgumentException(LocalizedFormats.FUNCTION,
					new Object[0]);
		}
		verifyInterval(lower, upper);
		if (!(isBracketing(function, lower, upper)))
			throw new NoBracketingException(lower, upper,
					function.value(lower), function.value(upper));
	}
}