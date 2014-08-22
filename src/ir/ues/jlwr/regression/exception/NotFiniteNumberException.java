package ir.ues.jlwr.regression.exception;

import ir.ues.jlwr.regression.Localizable;
import ir.ues.jlwr.regression.LocalizedFormats;

public class NotFiniteNumberException extends MathIllegalNumberException {
	private static final long serialVersionUID = -6100997100383932834L;

	public NotFiniteNumberException(Number wrong, Object[] args) {
		this(LocalizedFormats.NOT_FINITE_NUMBER, wrong, args);
	}

	public NotFiniteNumberException(Localizable specific, Number wrong,
			Object[] args) {
		super(specific, wrong, args);
	}
}
