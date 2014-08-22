package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.MathIllegalArgumentException;
import ir.ues.jlwr.regression.exception.ModelSpecificationException;
import ir.ues.jlwr.regression.exception.OutOfRangeException;

import java.io.Serializable;

public class SimpleRegression implements Serializable,
		UpdatingMultipleLinearRegression {
	private static final long serialVersionUID = -3004689053607543335L;
	private double sumX;
	private double sumXX;
	private double sumY;
	private double sumYY;
	private double sumXY;
	private long n;
	private double xbar;
	private double ybar;
	private final boolean hasIntercept;

	public SimpleRegression() {
		this(true);
	}

	public SimpleRegression(boolean includeIntercept) {
		this.sumX = 0.0D;

		this.sumXX = 0.0D;

		this.sumY = 0.0D;

		this.sumYY = 0.0D;

		this.sumXY = 0.0D;

		this.n = 0L;

		this.xbar = 0.0D;

		this.ybar = 0.0D;

		this.hasIntercept = includeIntercept;
	}

	public void addData(double x, double y) {
		if (this.n == 0L) {
			this.xbar = x;
			this.ybar = y;
		} else if (this.hasIntercept) {
			double fact1 = 1.0D + this.n;
			double fact2 = this.n / (1.0D + this.n);
			double dx = x - this.xbar;
			double dy = y - this.ybar;
			this.sumXX += dx * dx * fact2;
			this.sumYY += dy * dy * fact2;
			this.sumXY += dx * dy * fact2;
			this.xbar += dx / fact1;
			this.ybar += dy / fact1;
		}

		if (!(this.hasIntercept)) {
			this.sumXX += x * x;
			this.sumYY += y * y;
			this.sumXY += x * y;
		}
		this.sumX += x;
		this.sumY += y;
		this.n += 1L;
	}

	public void removeData(double x, double y) {
		if (this.n > 0L) {
			if (this.hasIntercept) {
				double fact1 = this.n - 1.0D;
				double fact2 = this.n / (this.n - 1.0D);
				double dx = x - this.xbar;
				double dy = y - this.ybar;
				this.sumXX -= dx * dx * fact2;
				this.sumYY -= dy * dy * fact2;
				this.sumXY -= dx * dy * fact2;
				this.xbar -= dx / fact1;
				this.ybar -= dy / fact1;
			} else {
				double fact1 = this.n - 1.0D;
				this.sumXX -= x * x;
				this.sumYY -= y * y;
				this.sumXY -= x * y;
				this.xbar -= x / fact1;
				this.ybar -= y / fact1;
			}
			this.sumX -= x;
			this.sumY -= y;
			this.n -= 1L;
		}
	}

	public void addData(double[][] data) {
		for (int i = 0; i < data.length; ++i) {
			if (data[i].length < 2) {
				throw new ModelSpecificationException(
						LocalizedFormats.INVALID_REGRESSION_OBSERVATION,
						new Object[] { Integer.valueOf(data[i].length),
								Integer.valueOf(2) });
			}

			addData(data[i][0], data[i][1]);
		}
	}

	public void addObservation(double[] x, double y)
			throws ModelSpecificationException {
		if ((x == null) || (x.length == 0)) {
			throw new ModelSpecificationException(
					LocalizedFormats.INVALID_REGRESSION_OBSERVATION,
					new Object[] { Integer.valueOf((x != null) ? x.length : 0),
							Integer.valueOf(1) });
		}
		addData(x[0], y);
	}

	public void addObservations(double[][] x, double[] y) {
		if ((x == null) || (y == null) || (x.length != y.length)) {
			throw new ModelSpecificationException(
					LocalizedFormats.DIMENSIONS_MISMATCH_SIMPLE, new Object[] {
							Integer.valueOf((x == null) ? 0 : x.length),
							Integer.valueOf((y == null) ? 0 : y.length) });
		}

		boolean obsOk = true;
		for (int i = 0; i < x.length; ++i) {
			if ((x[i] == null) || (x[i].length == 0)) {
				obsOk = false;
			}
		}
		if (!(obsOk)) {
			throw new ModelSpecificationException(
					LocalizedFormats.NOT_ENOUGH_DATA_FOR_NUMBER_OF_PREDICTORS,
					new Object[] { Integer.valueOf(0), Integer.valueOf(1) });
		}

		for (int i = 0; i < x.length; ++i)
			addData(x[i][0], y[i]);
	}

	public void removeData(double[][] data) {
		for (int i = 0; (i < data.length) && (this.n > 0L); ++i)
			removeData(data[i][0], data[i][1]);
	}

	public void clear() {
		this.sumX = 0.0D;
		this.sumXX = 0.0D;
		this.sumY = 0.0D;
		this.sumYY = 0.0D;
		this.sumXY = 0.0D;
		this.n = 0L;
	}

	public long getN() {
		return this.n;
	}

	public double predict(double x) {
		double b1 = getSlope();
		if (this.hasIntercept) {
			return (getIntercept(b1) + b1 * x);
		}
		return (b1 * x);
	}

	public double getIntercept() {
		return ((this.hasIntercept) ? getIntercept(getSlope()) : 0.0D);
	}

	public boolean hasIntercept() {
		return this.hasIntercept;
	}

	public double getSlope() {
		if (this.n < 2L) {
			return (0.0D / 0.0D);
		}
		if (FastMath.abs(this.sumXX) < 4.940656458412465E-323D) {
			return (0.0D / 0.0D);
		}
		return (this.sumXY / this.sumXX);
	}

	public double getSumSquaredErrors() {
		return FastMath.max(0.0D, this.sumYY
				- (this.sumXY * this.sumXY / this.sumXX));
	}

	public double getTotalSumSquares() {
		if (this.n < 2L) {
			return (0.0D / 0.0D);
		}
		return this.sumYY;
	}

	public double getXSumSquares() {
		if (this.n < 2L) {
			return (0.0D / 0.0D);
		}
		return this.sumXX;
	}

	public double getSumOfCrossProducts() {
		return this.sumXY;
	}

	public double getRegressionSumSquares() {
		return getRegressionSumSquares(getSlope());
	}

	public double getMeanSquareError() {
		if (this.n < 3L) {
			return (0.0D / 0.0D);
		}
		return ((this.hasIntercept) ? getSumSquaredErrors() / (this.n - 2L)
				: getSumSquaredErrors() / (this.n - 1L));
	}

	public double getR() {
		double b1 = getSlope();
		double result = FastMath.sqrt(getRSquare());
		if (b1 < 0.0D) {
			result = -result;
		}
		return result;
	}

	public double getRSquare() {
		double ssto = getTotalSumSquares();
		return ((ssto - getSumSquaredErrors()) / ssto);
	}

	public double getInterceptStdErr() {
		if (!(this.hasIntercept)) {
			return (0.0D / 0.0D);
		}
		return FastMath.sqrt(getMeanSquareError()
				* (1.0D / this.n + this.xbar * this.xbar / this.sumXX));
	}

	public double getSlopeStdErr() {
		return FastMath.sqrt(getMeanSquareError() / this.sumXX);
	}

	public double getSlopeConfidenceInterval() {
		return getSlopeConfidenceInterval(0.05D);
	}

	public double getSlopeConfidenceInterval(double alpha) {
		if ((alpha >= 1.0D) || (alpha <= 0.0D)) {
			throw new OutOfRangeException(LocalizedFormats.SIGNIFICANCE_LEVEL,
					Double.valueOf(alpha), Integer.valueOf(0),
					Integer.valueOf(1));
		}

		TDistribution distribution = new TDistribution(this.n - 2L);
		return (getSlopeStdErr() * distribution
				.inverseCumulativeProbability(1.0D - (alpha / 2.0D)));
	}

	public double getSignificance() {
		TDistribution distribution = new TDistribution(this.n - 2L);
		return (2.0D * (1.0D - distribution.cumulativeProbability(FastMath
				.abs(getSlope()) / getSlopeStdErr())));
	}

	private double getIntercept(double slope) {
		if (this.hasIntercept) {
			return ((this.sumY - (slope * this.sumX)) / this.n);
		}
		return 0.0D;
	}

	private double getRegressionSumSquares(double slope) {
		return (slope * slope * this.sumXX);
	}

	public RegressionResults regress() throws ModelSpecificationException {
		if (this.hasIntercept) {
			if (this.n < 3L) {
				throw new NoDataException(
						LocalizedFormats.NOT_ENOUGH_DATA_REGRESSION);
			}
			if (FastMath.abs(this.sumXX) > 2.225073858507201E-308D) {
				double[] params = { getIntercept(), getSlope() };
				double mse = getMeanSquareError();
				double _syy = this.sumYY + this.sumY * this.sumY / this.n;
				double[] vcv = {
						mse
								* (this.xbar * this.xbar / this.sumXX + 1.0D / this.n),
						-this.xbar * mse / this.sumXX, mse / this.sumXX };

				return new RegressionResults(params, new double[][] { vcv },
						true, this.n, 2, this.sumY, _syy,
						getSumSquaredErrors(), true, false);
			}

			double[] params = { this.sumY / this.n, (0.0D / 0.0D) };

			double[] vcv = { this.ybar / (this.n - 1.0D), (0.0D / 0.0D),
					(0.0D / 0.0D) };

			return new RegressionResults(params, new double[][] { vcv }, true,
					this.n, 1, this.sumY, this.sumYY, getSumSquaredErrors(),
					true, false);
		}

		if (this.n < 2L) {
			throw new NoDataException(
					LocalizedFormats.NOT_ENOUGH_DATA_REGRESSION);
		}
		if (!(Double.isNaN(this.sumXX))) {
			double[] vcv = { getMeanSquareError() / this.sumXX };
			double[] params = { this.sumXY / this.sumXX };
			return new RegressionResults(params, new double[][] { vcv }, true,
					this.n, 1, this.sumY, this.sumYY, getSumSquaredErrors(),
					false, false);
		}

		double[] vcv = { (0.0D / 0.0D) };
		double[] params = { (0.0D / 0.0D) };
		return new RegressionResults(params, new double[][] { vcv }, true,
				this.n, 1, (0.0D / 0.0D), (0.0D / 0.0D), (0.0D / 0.0D), false,
				false);
	}

	public RegressionResults regress(int[] variablesToInclude)
			throws ModelSpecificationException {
		if ((variablesToInclude == null) || (variablesToInclude.length == 0)) {
			throw new MathIllegalArgumentException(
					LocalizedFormats.ARRAY_ZERO_LENGTH_OR_NULL_NOT_ALLOWED,
					new Object[0]);
		}
		if ((variablesToInclude.length > 2)
				|| ((variablesToInclude.length > 1) && (!(this.hasIntercept)))) {
			throw new ModelSpecificationException(
					LocalizedFormats.ARRAY_SIZE_EXCEEDS_MAX_VARIABLES,
					new Object[] { Integer
							.valueOf(((variablesToInclude.length > 1) && (!(this.hasIntercept))) ? 1
									: 2) });
		}

		if (this.hasIntercept) {
			if (variablesToInclude.length == 2) {
				if (variablesToInclude[0] == 1)
					throw new ModelSpecificationException(
							LocalizedFormats.NOT_INCREASING_SEQUENCE,
							new Object[0]);
				if (variablesToInclude[0] != 0) {
					throw new OutOfRangeException(
							Integer.valueOf(variablesToInclude[0]),
							Integer.valueOf(0), Integer.valueOf(1));
				}
				if (variablesToInclude[1] != 1) {
					throw new OutOfRangeException(
							Integer.valueOf(variablesToInclude[0]),
							Integer.valueOf(0), Integer.valueOf(1));
				}
				return regress();
			}
			if ((variablesToInclude[0] != 1) && (variablesToInclude[0] != 0)) {
				throw new OutOfRangeException(
						Integer.valueOf(variablesToInclude[0]),
						Integer.valueOf(0), Integer.valueOf(1));
			}
			double _mean = this.sumY * this.sumY / this.n;
			double _syy = this.sumYY + _mean;
			if (variablesToInclude[0] == 0) {
				double[] vcv = { this.sumYY / (this.n - 1L) * this.n };
				double[] params = { this.ybar };
				return new RegressionResults(params, new double[][] { vcv },
						true, this.n, 1, this.sumY, _syy + _mean, this.sumYY,
						true, false);
			}

			if (variablesToInclude[0] == 1) {
				double _sxx = this.sumXX + this.sumX * this.sumX / this.n;
				double _sxy = this.sumXY + this.sumX * this.sumY / this.n;
				double _sse = FastMath.max(0.0D, _syy - (_sxy * _sxy / _sxx));
				double _mse = _sse / (this.n - 1L);
				if (!(Double.isNaN(_sxx))) {
					double[] vcv = { _mse / _sxx };
					double[] params = { _sxy / _sxx };
					return new RegressionResults(params,
							new double[][] { vcv }, true, this.n, 1, this.sumY,
							_syy, _sse, false, false);
				}

				double[] vcv = { (0.0D / 0.0D) };
				double[] params = { (0.0D / 0.0D) };
				return new RegressionResults(params, new double[][] { vcv },
						true, this.n, 1, (0.0D / 0.0D), (0.0D / 0.0D),
						(0.0D / 0.0D), false, false);
			}

		} else {
			if (variablesToInclude[0] != 0) {
				throw new OutOfRangeException(
						Integer.valueOf(variablesToInclude[0]),
						Integer.valueOf(0), Integer.valueOf(0));
			}
			return regress();
		}

		return null;
	}
}