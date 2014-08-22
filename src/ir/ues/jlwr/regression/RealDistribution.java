package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.NumberIsTooLargeException;
import ir.ues.jlwr.regression.exception.OutOfRangeException;

public abstract interface RealDistribution {
	public abstract double probability(double paramDouble);

	public abstract double density(double paramDouble);

	public abstract double cumulativeProbability(double paramDouble);

	public abstract double cumulativeProbability(double paramDouble1,
			double paramDouble2) throws NumberIsTooLargeException;

	public abstract double inverseCumulativeProbability(double paramDouble)
			throws OutOfRangeException;

	public abstract double getNumericalMean();

	public abstract double getNumericalVariance();

	public abstract double getSupportLowerBound();

	public abstract double getSupportUpperBound();

	public abstract boolean isSupportLowerBoundInclusive();

	public abstract boolean isSupportUpperBoundInclusive();

	public abstract boolean isSupportConnected();

	public abstract void reseedRandomGenerator(long paramLong);

	public abstract double sample();

	public abstract double[] sample(int paramInt);
}