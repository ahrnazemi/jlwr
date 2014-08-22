package ir.ues.jlwr.regression;

public abstract interface BracketedUnivariateSolver<FUNC extends UnivariateFunction>
		extends BaseUnivariateSolver<FUNC> {
	public abstract double solve(int paramInt, FUNC paramFUNC,
			double paramDouble1, double paramDouble2,
			AllowedSolution paramAllowedSolution);

	public abstract double solve(int paramInt, FUNC paramFUNC,
			double paramDouble1, double paramDouble2, double paramDouble3,
			AllowedSolution paramAllowedSolution);
}