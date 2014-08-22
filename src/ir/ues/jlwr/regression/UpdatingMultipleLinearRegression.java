package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.ModelSpecificationException;

public abstract interface UpdatingMultipleLinearRegression {
	public abstract boolean hasIntercept();

	public abstract long getN();

	public abstract void addObservation(double[] paramArrayOfDouble,
			double paramDouble) throws ModelSpecificationException;

	public abstract void addObservations(double[][] paramArrayOfDouble,
			double[] paramArrayOfDouble1) throws ModelSpecificationException;

	public abstract void clear();

	public abstract RegressionResults regress()
			throws ModelSpecificationException;

	public abstract RegressionResults regress(int[] paramArrayOfInt)
			throws ModelSpecificationException;
}