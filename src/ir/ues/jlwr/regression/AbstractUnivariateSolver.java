package ir.ues.jlwr.regression;

public abstract class AbstractUnivariateSolver extends
		BaseAbstractUnivariateSolver<UnivariateFunction> implements
		UnivariateSolver {
	protected AbstractUnivariateSolver(double absoluteAccuracy) {
		super(absoluteAccuracy);
	}

	protected AbstractUnivariateSolver(double relativeAccuracy,
			double absoluteAccuracy) {
		super(relativeAccuracy, absoluteAccuracy);
	}

	protected AbstractUnivariateSolver(double relativeAccuracy,
			double absoluteAccuracy, double functionValueAccuracy) {
		super(relativeAccuracy, absoluteAccuracy, functionValueAccuracy);
	}
}