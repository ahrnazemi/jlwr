package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.MaxCountExceededException;
import ir.ues.jlwr.regression.exception.NoBracketingException;
import ir.ues.jlwr.regression.exception.TooManyEvaluationsException;

public abstract class BaseAbstractUnivariateSolver<FUNC extends UnivariateFunction>
		implements BaseUnivariateSolver<FUNC> {
	private static final double DEFAULT_RELATIVE_ACCURACY = 1.0E-014D;
	private static final double DEFAULT_FUNCTION_VALUE_ACCURACY = 1.E-015D;
	private final double functionValueAccuracy;
	private final double absoluteAccuracy;
	private final double relativeAccuracy;
	private final Incrementor evaluations;
	private double searchMin;
	private double searchMax;
	private double searchStart;
	private FUNC function;

	protected BaseAbstractUnivariateSolver(double absoluteAccuracy) {
		this(1.0E-014D, absoluteAccuracy, 1.E-015D);
	}

	protected BaseAbstractUnivariateSolver(double relativeAccuracy,
			double absoluteAccuracy) {
		this(relativeAccuracy, absoluteAccuracy, 1.E-015D);
	}

	protected BaseAbstractUnivariateSolver(double relativeAccuracy,
			double absoluteAccuracy, double functionValueAccuracy) {
		this.evaluations = new Incrementor();

		this.absoluteAccuracy = absoluteAccuracy;
		this.relativeAccuracy = relativeAccuracy;
		this.functionValueAccuracy = functionValueAccuracy;
	}

	public int getMaxEvaluations() {
		return this.evaluations.getMaximalCount();
	}

	public int getEvaluations() {
		return this.evaluations.getCount();
	}

	public double getMin() {
		return this.searchMin;
	}

	public double getMax() {
		return this.searchMax;
	}

	public double getStartValue() {
		return this.searchStart;
	}

	public double getAbsoluteAccuracy() {
		return this.absoluteAccuracy;
	}

	public double getRelativeAccuracy() {
		return this.relativeAccuracy;
	}

	public double getFunctionValueAccuracy() {
		return this.functionValueAccuracy;
	}

	protected double computeObjectiveValue(double point)
			throws TooManyEvaluationsException {
		incrementEvaluationCount();
		return this.function.value(point);
	}

	protected void setup(int maxEval, FUNC f, double min, double max,
			double startValue) {
		MathUtils.checkNotNull(f);

		this.searchMin = min;
		this.searchMax = max;
		this.searchStart = startValue;
		this.function = f;
		this.evaluations.setMaximalCount(maxEval);
		this.evaluations.resetCount();
	}

	public double solve(int maxEval, FUNC f, double min, double max,
			double startValue) {
		setup(maxEval, f, min, max, startValue);

		return doSolve();
	}

	public double solve(int maxEval, FUNC f, double min, double max) {
		return solve(maxEval, f, min, max, min + 0.5D * (max - min));
	}

	public double solve(int maxEval, FUNC f, double startValue) {
		return solve(maxEval, f, (0.0D / 0.0D), (0.0D / 0.0D), startValue);
	}

	protected abstract double doSolve() throws TooManyEvaluationsException,
			NoBracketingException;

	protected boolean isBracketing(double lower, double upper) {
		return UnivariateSolverUtils.isBracketing(this.function, lower, upper);
	}

	protected boolean isSequence(double start, double mid, double end) {
		return UnivariateSolverUtils.isSequence(start, mid, end);
	}

	protected void verifyInterval(double lower, double upper) {
		UnivariateSolverUtils.verifyInterval(lower, upper);
	}

	protected void verifySequence(double lower, double initial, double upper) {
		UnivariateSolverUtils.verifySequence(lower, initial, upper);
	}

	protected void verifyBracketing(double lower, double upper) {
		UnivariateSolverUtils.verifyBracketing(this.function, lower, upper);
	}

	protected void incrementEvaluationCount() {
		try {
			this.evaluations.incrementCount();
		} catch (MaxCountExceededException e) {
			throw new TooManyEvaluationsException(e.getMax());
		}
	}
}