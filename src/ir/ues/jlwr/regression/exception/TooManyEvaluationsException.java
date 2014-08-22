package ir.ues.jlwr.regression.exception;

import ir.ues.jlwr.regression.LocalizedFormats;

public class TooManyEvaluationsException extends MaxCountExceededException {
	private static final long serialVersionUID = 4330003017885151975L;

	public TooManyEvaluationsException(Number max) {
		super(max);
		getContext().addMessage(LocalizedFormats.EVALUATIONS, new Object[0]);
	}
}