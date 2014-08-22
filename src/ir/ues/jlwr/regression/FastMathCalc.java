package ir.ues.jlwr.regression;

import java.io.PrintStream;

class FastMathCalc {
	private static final long HEX_40000000 = 1073741824L;
	private static final double[] FACT = { 1.0D, 1.0D, 2.0D, 6.0D, 24.0D,
			120.0D, 720.0D, 5040.0D, 40320.0D, 362880.0D, 3628800.0D,
			39916800.0D, 479001600.0D, 6227020800.0D, 87178291200.0D,
			1307674368000.0D, 20922789888000.0D, 355687428096000.0D,
			6402373705728000.0D, 1.21645100408832E+017D };

	private static final double[][] LN_SPLIT_COEF = { { 2.0D, 0.0D },
			{ 0.6666666269302368D, 3.973642985026063E-008D },
			{ 0.3999999761581421D, 2.384185791001988E-008D },
			{ 0.2857142686843872D, 1.702989854350184E-008D },
			{ 0.2222222089767456D, 1.32454713117355E-008D },
			{ 0.181818157434464D, 2.438420304435491E-008D },
			{ 0.153846144676209D, 9.140260083262505E-009D },
			{ 0.1333333253860474D, 9.220590270857665E-009D },
			{ 0.1176470071077347D, 1.239334585501839E-008D },
			{ 0.1052640378475189D, 8.251545029714408E-009D },
			{ 0.0952233225107193D, 1.267593482375886E-008D },
			{ 0.08713622391223908D, 1.143025000890914E-008D },
			{ 0.07842259109020233D, 2.404307984052299E-009D },
			{ 0.08371849358081818D, 1.176342548272881E-008D },
			{ 0.03058958053588867D, 1.295864689901894E-009D },
			{ 0.1498230397701263D, 1.225743062930824E-008D } };
	private static final String TABLE_START_DECL = "    {";
	private static final String TABLE_END_DECL = "    };";

	private static void buildSinCosTables(double[] SINE_TABLE_A,
			double[] SINE_TABLE_B, double[] COSINE_TABLE_A,
			double[] COSINE_TABLE_B, int SINE_TABLE_LEN,
			double[] TANGENT_TABLE_A, double[] TANGENT_TABLE_B) {
		double[] result = new double[2];

		for (int i = 0; i < 7; ++i) {
			double x = i / 8.0D;

			slowSin(x, result);
			SINE_TABLE_A[i] = result[0];
			SINE_TABLE_B[i] = result[1];

			slowCos(x, result);
			COSINE_TABLE_A[i] = result[0];
			COSINE_TABLE_B[i] = result[1];
		}

		for (int i = 7; i < SINE_TABLE_LEN; ++i) {
			double[] xs = new double[2];
			double[] ys = new double[2];
			double[] as = new double[2];
			double[] bs = new double[2];
			double[] temps = new double[2];

			if ((i & 0x1) == 0) {
				xs[0] = SINE_TABLE_A[(i / 2)];
				xs[1] = SINE_TABLE_B[(i / 2)];
				ys[0] = COSINE_TABLE_A[(i / 2)];
				ys[1] = COSINE_TABLE_B[(i / 2)];

				splitMult(xs, ys, result);
				SINE_TABLE_A[i] = (result[0] * 2.0D);
				SINE_TABLE_B[i] = (result[1] * 2.0D);

				splitMult(ys, ys, as);
				splitMult(xs, xs, temps);
				temps[0] = (-temps[0]);
				temps[1] = (-temps[1]);
				splitAdd(as, temps, result);
				COSINE_TABLE_A[i] = result[0];
				COSINE_TABLE_B[i] = result[1];
			} else {
				xs[0] = SINE_TABLE_A[(i / 2)];
				xs[1] = SINE_TABLE_B[(i / 2)];
				ys[0] = COSINE_TABLE_A[(i / 2)];
				ys[1] = COSINE_TABLE_B[(i / 2)];
				as[0] = SINE_TABLE_A[(i / 2 + 1)];
				as[1] = SINE_TABLE_B[(i / 2 + 1)];
				bs[0] = COSINE_TABLE_A[(i / 2 + 1)];
				bs[1] = COSINE_TABLE_B[(i / 2 + 1)];

				splitMult(xs, bs, temps);
				splitMult(ys, as, result);
				splitAdd(result, temps, result);
				SINE_TABLE_A[i] = result[0];
				SINE_TABLE_B[i] = result[1];

				splitMult(ys, bs, result);
				splitMult(xs, as, temps);
				temps[0] = (-temps[0]);
				temps[1] = (-temps[1]);
				splitAdd(result, temps, result);
				COSINE_TABLE_A[i] = result[0];
				COSINE_TABLE_B[i] = result[1];
			}

		}

		for (int i = 0; i < SINE_TABLE_LEN; ++i) {
			double[] xs = new double[2];
			double[] ys = new double[2];
			double[] as = new double[2];

			as[0] = COSINE_TABLE_A[i];
			as[1] = COSINE_TABLE_B[i];

			splitReciprocal(as, ys);

			xs[0] = SINE_TABLE_A[i];
			xs[1] = SINE_TABLE_B[i];

			splitMult(xs, ys, as);

			TANGENT_TABLE_A[i] = as[0];
			TANGENT_TABLE_B[i] = as[1];
		}
	}

	static double slowCos(double x, double[] result) {
		double[] xs = new double[2];
		double[] ys = new double[2];
		double[] facts = new double[2];
		double[] as = new double[2];
		split(x, xs);
		ys[0] = (ys[1] = 0.0D);

		for (int i = FACT.length - 1; i >= 0; --i) {
			splitMult(xs, ys, as);
			ys[0] = as[0];
			ys[1] = as[1];

			if ((i & 0x1) != 0) {
				continue;
			}

			split(FACT[i], as);
			splitReciprocal(as, facts);

			if ((i & 0x2) != 0) {
				facts[0] = (-facts[0]);
				facts[1] = (-facts[1]);
			}

			splitAdd(ys, facts, as);
			ys[0] = as[0];
			ys[1] = as[1];
		}

		if (result != null) {
			result[0] = ys[0];
			result[1] = ys[1];
		}

		return (ys[0] + ys[1]);
	}

	static double slowSin(double x, double[] result) {
		double[] xs = new double[2];
		double[] ys = new double[2];
		double[] facts = new double[2];
		double[] as = new double[2];
		split(x, xs);
		ys[0] = (ys[1] = 0.0D);

		for (int i = FACT.length - 1; i >= 0; --i) {
			splitMult(xs, ys, as);
			ys[0] = as[0];
			ys[1] = as[1];

			if ((i & 0x1) == 0) {
				continue;
			}

			split(FACT[i], as);
			splitReciprocal(as, facts);

			if ((i & 0x2) != 0) {
				facts[0] = (-facts[0]);
				facts[1] = (-facts[1]);
			}

			splitAdd(ys, facts, as);
			ys[0] = as[0];
			ys[1] = as[1];
		}

		if (result != null) {
			result[0] = ys[0];
			result[1] = ys[1];
		}

		return (ys[0] + ys[1]);
	}

	static double slowexp(double x, double[] result) {
		double[] xs = new double[2];
		double[] ys = new double[2];
		double[] facts = new double[2];
		double[] as = new double[2];
		split(x, xs);
		ys[0] = (ys[1] = 0.0D);

		for (int i = FACT.length - 1; i >= 0; --i) {
			splitMult(xs, ys, as);
			ys[0] = as[0];
			ys[1] = as[1];

			split(FACT[i], as);
			splitReciprocal(as, facts);

			splitAdd(ys, facts, as);
			ys[0] = as[0];
			ys[1] = as[1];
		}

		if (result != null) {
			result[0] = ys[0];
			result[1] = ys[1];
		}

		return (ys[0] + ys[1]);
	}

	private static void split(double d, double[] split) {
		if ((d < 8.0E+298D) && (d > -8.0E+298D)) {
			double a = d * 1073741824.0D;
			split[0] = (d + a - a);
			split[1] = (d - split[0]);
		} else {
			double a = d * 9.313225746154785E-010D;
			split[0] = ((d + a - d) * 1073741824.0D);
			split[1] = (d - split[0]);
		}
	}

	private static void resplit(double[] a) {
		double c = a[0] + a[1];
		double d = -(c - a[0] - a[1]);

		if ((c < 8.0E+298D) && (c > -8.0E+298D)) {
			double z = c * 1073741824.0D;
			a[0] = (c + z - z);
			a[1] = (c - a[0] + d);
		} else {
			double z = c * 9.313225746154785E-010D;
			a[0] = ((c + z - c) * 1073741824.0D);
			a[1] = (c - a[0] + d);
		}
	}

	private static void splitMult(double[] a, double[] b, double[] ans) {
		ans[0] = (a[0] * b[0]);
		ans[1] = (a[0] * b[1] + a[1] * b[0] + a[1] * b[1]);

		resplit(ans);
	}

	private static void splitAdd(double[] a, double[] b, double[] ans) {
		ans[0] = (a[0] + b[0]);
		ans[1] = (a[1] + b[1]);

		resplit(ans);
	}

	static void splitReciprocal(double[] in, double[] result) {
		double b = 2.384185791015625E-007D;
		double a = 0.999999761581421D;

		if (in[0] == 0.0D) {
			in[0] = in[1];
			in[1] = 0.0D;
		}

		result[0] = (0.999999761581421D / in[0]);
		result[1] = ((2.384185791015625E-007D * in[0] - (0.999999761581421D * in[1])) / (in[0]
				* in[0] + in[0] * in[1]));

		if (result[1] != result[1]) {
			result[1] = 0.0D;
		}

		resplit(result);

		for (int i = 0; i < 2; ++i) {
			double err = 1.0D - (result[0] * in[0]) - (result[0] * in[1])
					- (result[1] * in[0]) - (result[1] * in[1]);

			err *= (result[0] + result[1]);

			result[1] += err;
		}
	}

	private static void quadMult(double[] a, double[] b, double[] result) {
		double[] xs = new double[2];
		double[] ys = new double[2];
		double[] zs = new double[2];

		split(a[0], xs);
		split(b[0], ys);
		splitMult(xs, ys, zs);

		result[0] = zs[0];
		result[1] = zs[1];

		split(b[1], ys);
		splitMult(xs, ys, zs);

		double tmp = result[0] + zs[0];
		result[1] -= tmp - result[0] - zs[0];
		result[0] = tmp;
		tmp = result[0] + zs[1];
		result[1] -= tmp - result[0] - zs[1];
		result[0] = tmp;

		split(a[1], xs);
		split(b[0], ys);
		splitMult(xs, ys, zs);

		tmp = result[0] + zs[0];
		result[1] -= tmp - result[0] - zs[0];
		result[0] = tmp;
		tmp = result[0] + zs[1];
		result[1] -= tmp - result[0] - zs[1];
		result[0] = tmp;

		split(a[1], xs);
		split(b[1], ys);
		splitMult(xs, ys, zs);

		tmp = result[0] + zs[0];
		result[1] -= tmp - result[0] - zs[0];
		result[0] = tmp;
		tmp = result[0] + zs[1];
		result[1] -= tmp - result[0] - zs[1];
		result[0] = tmp;
	}

	static double expint(int p, double[] result) {
		double[] xs = new double[2];
		double[] as = new double[2];
		double[] ys = new double[2];

		xs[0] = 2.718281828459045D;
		xs[1] = 1.44564689172925E-016D;

		split(1.0D, ys);

		while (p > 0) {
			if ((p & 0x1) != 0) {
				quadMult(ys, xs, as);
				ys[0] = as[0];
				ys[1] = as[1];
			}

			quadMult(xs, xs, as);
			xs[0] = as[0];
			xs[1] = as[1];

			p >>= 1;
		}

		if (result != null) {
			result[0] = ys[0];
			result[1] = ys[1];

			resplit(result);
		}

		return (ys[0] + ys[1]);
	}

	static double[] slowLog(double xi) {
		double[] x = new double[2];
		double[] x2 = new double[2];
		double[] y = new double[2];
		double[] a = new double[2];

		split(xi, x);

		x[0] += 1.0D;
		resplit(x);
		splitReciprocal(x, a);
		x[0] -= 2.0D;
		resplit(x);
		splitMult(x, a, y);
		x[0] = y[0];
		x[1] = y[1];

		splitMult(x, x, x2);

		y[0] = LN_SPLIT_COEF[(LN_SPLIT_COEF.length - 1)][0];
		y[1] = LN_SPLIT_COEF[(LN_SPLIT_COEF.length - 1)][1];

		for (int i = LN_SPLIT_COEF.length - 2; i >= 0; --i) {
			splitMult(y, x2, a);
			y[0] = a[0];
			y[1] = a[1];
			splitAdd(y, LN_SPLIT_COEF[i], a);
			y[0] = a[0];
			y[1] = a[1];
		}

		splitMult(y, x, a);
		y[0] = a[0];
		y[1] = a[1];

		return y;
	}

	static void printarray(PrintStream out, String name, int expectedLen,
			double[][] array2d) {
		out.println(name);
		checkLen(expectedLen, array2d.length);
		out.println("    { ");
		int i = 0;
		for (double[] array : array2d) {
			out.print("        {");
			for (double d : array) {
				out.printf("%-25.25s", new Object[] { format(d) });
			}
			out.println("}, // " + (i++));
		}
		out.println("    };");
	}

	static void printarray(PrintStream out, String name, int expectedLen,
			double[] array) {
		out.println(name + "=");
		checkLen(expectedLen, array.length);
		out.println("    {");
		for (double d : array) {
			out.printf("        %s%n", new Object[] { format(d) });
		}
		out.println("    };");
	}

	static String format(double d) {
		if (d != d) {
			return "Double.NaN,";
		}
		return ((d >= 0.0D) ? "+" : "") + Double.toString(d) + "d,";
	}

	private static void checkLen(int expectedLen, int actual)
			throws DimensionMismatchException {
		if (expectedLen != actual)
			throw new DimensionMismatchException(actual, expectedLen);
	}
}