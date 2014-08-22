package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.OutOfRangeException;

import java.io.Serializable;
import java.util.Arrays;


public class RegressionResults implements Serializable {
	private static final int SSE_IDX = 0;
	private static final int SST_IDX = 1;
	private static final int RSQ_IDX = 2;
	private static final int MSE_IDX = 3;
	private static final int ADJRSQ_IDX = 4;
	private static final long serialVersionUID = 1L;
	private final double[] parameters;
	private final double[][] varCovData;
	private final boolean isSymmetricVCD;
	private final int rank;
	private final long nobs;
	private final boolean containsConstant;
	private final double[] globalFitInfo;

	private RegressionResults() {
		this.parameters = null;
		this.varCovData = ((double[][]) null);
		this.rank = -1;
		this.nobs = -1L;
		this.containsConstant = false;
		this.isSymmetricVCD = false;
		this.globalFitInfo = null;
	}

	public RegressionResults(double[] parameters, double[][] varcov,
			boolean isSymmetricCompressed, long nobs, int rank, double sumy,
			double sumysq, double sse, boolean containsConstant,
			boolean copyData) {
		if (copyData) {
			this.parameters = MathArrays.copyOf(parameters);
			this.varCovData = new double[varcov.length][];
			for (int i = 0; i < varcov.length; ++i)
				this.varCovData[i] = MathArrays.copyOf(varcov[i]);
		} else {
			this.parameters = parameters;
			this.varCovData = varcov;
		}
		this.isSymmetricVCD = isSymmetricCompressed;
		this.nobs = nobs;
		this.rank = rank;
		this.containsConstant = containsConstant;
		this.globalFitInfo = new double[5];
		Arrays.fill(this.globalFitInfo, (0.0D / 0.0D));

		if (rank > 0) {
			this.globalFitInfo[1] = ((containsConstant) ? sumysq
					- (sumy * sumy / nobs) : sumysq);
		}

		this.globalFitInfo[0] = sse;
		this.globalFitInfo[3] = (this.globalFitInfo[0] / (nobs - rank));

		this.globalFitInfo[2] = (1.0D - (this.globalFitInfo[0] / this.globalFitInfo[1]));

		if (!(containsConstant)) {
			this.globalFitInfo[4] = (1.0D - ((1.0D - this.globalFitInfo[2])
					* nobs / (nobs - rank)));
		} else {
			this.globalFitInfo[4] = (1.0D - (sse * (nobs - 1.0D)
					/ this.globalFitInfo[1] * (nobs - rank)));
		}
	}

	public double getParameterEstimate(int index) {
		if (this.parameters == null) {
			return (0.0D / 0.0D);
		}
		if ((index < 0) || (index >= this.parameters.length)) {
			throw new OutOfRangeException(Integer.valueOf(index),
					Integer.valueOf(0),
					Integer.valueOf(this.parameters.length - 1));
		}
		return this.parameters[index];
	}

	public double[] getParameterEstimates() {
		if (this.parameters == null) {
			return null;
		}
		return MathArrays.copyOf(this.parameters);
	}

	public double getStdErrorOfEstimate(int index) {
		if (this.parameters == null) {
			return (0.0D / 0.0D);
		}
		if ((index < 0) || (index >= this.parameters.length)) {
			throw new OutOfRangeException(Integer.valueOf(index),
					Integer.valueOf(0),
					Integer.valueOf(this.parameters.length - 1));
		}
		double var = getVcvElement(index, index);
		if ((!(Double.isNaN(var))) && (var > 4.9E-324D)) {
			return FastMath.sqrt(var);
		}
		return (0.0D / 0.0D);
	}

	public double[] getStdErrorOfEstimates() {
		if (this.parameters == null) {
			return null;
		}
		double[] se = new double[this.parameters.length];
		for (int i = 0; i < this.parameters.length; ++i) {
			double var = getVcvElement(i, i);
			if ((!(Double.isNaN(var))) && (var > 4.9E-324D)) {
				se[i] = FastMath.sqrt(var);
			} else
				se[i] = (0.0D / 0.0D);
		}
		return se;
	}

	public double getCovarianceOfParameters(int i, int j) {
		if (this.parameters == null) {
			return (0.0D / 0.0D);
		}
		if ((i < 0) || (i >= this.parameters.length)) {
			throw new OutOfRangeException(Integer.valueOf(i),
					Integer.valueOf(0),
					Integer.valueOf(this.parameters.length - 1));
		}
		if ((j < 0) || (j >= this.parameters.length)) {
			throw new OutOfRangeException(Integer.valueOf(j),
					Integer.valueOf(0),
					Integer.valueOf(this.parameters.length - 1));
		}
		return getVcvElement(i, j);
	}

	public int getNumberOfParameters() {
		if (this.parameters == null) {
			return -1;
		}
		return this.parameters.length;
	}

	public long getN() {
		return this.nobs;
	}

	public double getTotalSumSquares() {
		return this.globalFitInfo[1];
	}

	public double getRegressionSumSquares() {
		return (this.globalFitInfo[1] - this.globalFitInfo[0]);
	}

	public double getErrorSumSquares() {
		return this.globalFitInfo[0];
	}

	public double getMeanSquareError() {
		return this.globalFitInfo[3];
	}

	public double getRSquared() {
		return this.globalFitInfo[2];
	}

	public double getAdjustedRSquared() {
		return this.globalFitInfo[4];
	}

	public boolean hasIntercept() {
		return this.containsConstant;
	}

	private double getVcvElement(int i, int j) {
		if (this.isSymmetricVCD) {
			if (this.varCovData.length > 1) {
				if (i == j)
					return this.varCovData[i][i];
				if (i >= this.varCovData[j].length) {
					return this.varCovData[i][j];
				}
				return this.varCovData[j][i];
			}

			if (i > j) {
				return this.varCovData[0][((i + 1) * i / 2 + j)];
			}
			return this.varCovData[0][((j + 1) * j / 2 + i)];
		}

		return this.varCovData[i][j];
	}
}