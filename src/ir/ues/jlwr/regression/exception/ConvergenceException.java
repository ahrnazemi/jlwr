package ir.ues.jlwr.regression.exception;

import ir.ues.jlwr.regression.Localizable;
import ir.ues.jlwr.regression.LocalizedFormats;

public class ConvergenceException extends MathIllegalStateException {
	private static final long serialVersionUID = 4330003017885151975L;

	public ConvergenceException() {
		this(LocalizedFormats.CONVERGENCE_FAILED, new Object[0]);
	}

	public ConvergenceException(Localizable pattern, Object[] args) {
		getContext().addMessage(pattern, args);
	}
}