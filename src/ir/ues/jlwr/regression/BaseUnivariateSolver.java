package ir.ues.jlwr.regression;

public abstract interface BaseUnivariateSolver<FUNC extends UnivariateFunction> {
	public abstract int getMaxEvaluations();

	public abstract int getEvaluations();

	public abstract double getAbsoluteAccuracy();

	public abstract double getRelativeAccuracy();

	public abstract double getFunctionValueAccuracy();

	public abstract double solve(int paramInt, FUNC paramFUNC,
			double paramDouble1, double paramDouble2);

	public abstract double solve(int paramInt, FUNC paramFUNC,
			double paramDouble1, double paramDouble2, double paramDouble3);

	public abstract double solve(int paramInt, FUNC paramFUNC,
			double paramDouble);
}