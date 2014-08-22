package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.MathArithmeticException;
import ir.ues.jlwr.regression.exception.NotFiniteNumberException;
import ir.ues.jlwr.regression.exception.NullArgumentException;

import java.util.Arrays;

public final class MathUtils {
	public static final double TWO_PI = 6.283185307179586D;

	public static int hash(double value) {
		return new Double(value).hashCode();
	}

	public static int hash(double[] value) {
		return Arrays.hashCode(value);
	}

	public static double normalizeAngle(double a, double center) {
		return (a - (6.283185307179586D * FastMath
				.floor((a + 3.141592653589793D - center) / 6.283185307179586D)));
	}

	public static double reduce(double a, double period, double offset) {
		double p = FastMath.abs(period);
		return (a - (p * FastMath.floor((a - offset) / p)) - offset);
	}

	public static byte copySign(byte magnitude, byte sign) {
		if (((magnitude >= 0) && (sign >= 0))
				|| ((magnitude < 0) && (sign < 0))) {
			return magnitude;
		}
		if ((sign >= 0) && (magnitude == -128)) {
			throw new MathArithmeticException(LocalizedFormats.OVERFLOW,
					new Object[0]);
		}
		return (byte) (-magnitude);
	}

	public static short copySign(short magnitude, short sign) {
		if (((magnitude >= 0) && (sign >= 0))
				|| ((magnitude < 0) && (sign < 0))) {
			return magnitude;
		}
		if ((sign >= 0) && (magnitude == -32768)) {
			throw new MathArithmeticException(LocalizedFormats.OVERFLOW,
					new Object[0]);
		}
		return (short) (-magnitude);
	}

	public static int copySign(int magnitude, int sign) {
		if (((magnitude >= 0) && (sign >= 0))
				|| ((magnitude < 0) && (sign < 0))) {
			return magnitude;
		}
		if ((sign >= 0) && (magnitude == -2147483648)) {
			throw new MathArithmeticException(LocalizedFormats.OVERFLOW,
					new Object[0]);
		}
		return (-magnitude);
	}

	public static long copySign(long magnitude, long sign) {
		if (((magnitude >= 0L) && (sign >= 0L))
				|| ((magnitude < 0L) && (sign < 0L))) {
			return magnitude;
		}
		if ((sign >= 0L) && (magnitude == -9223372036854775808L)) {
			throw new MathArithmeticException(LocalizedFormats.OVERFLOW,
					new Object[0]);
		}
		return (-magnitude);
	}

	public static void checkFinite(double x) {
		if ((Double.isInfinite(x)) || (Double.isNaN(x)))
			throw new NotFiniteNumberException(Double.valueOf(x), new Object[0]);
	}

	public static void checkFinite(double[] val) {
		for (int i = 0; i < val.length; ++i) {
			double x = val[i];
			if ((Double.isInfinite(x)) || (Double.isNaN(x)))
				throw new NotFiniteNumberException(
						LocalizedFormats.ARRAY_ELEMENT, Double.valueOf(x),
						new Object[] { Integer.valueOf(i) });
		}
	}

	public static void checkNotNull(Object o, Localizable pattern, Object[] args) {
		if (o == null)
			throw new NullArgumentException(pattern, args);
	}

	public static void checkNotNull(Object o) throws NullArgumentException {
		if (o == null)
			throw new NullArgumentException();
	}
}