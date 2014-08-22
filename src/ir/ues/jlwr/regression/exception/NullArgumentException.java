package ir.ues.jlwr.regression.exception;

import ir.ues.jlwr.regression.Localizable;
import ir.ues.jlwr.regression.LocalizedFormats;

public class NullArgumentException extends MathIllegalArgumentException {
	private static final long serialVersionUID = -6024911025449780478L;

	public NullArgumentException() {
		this(LocalizedFormats.NULL_NOT_ALLOWED, new Object[0]);
	}

	public NullArgumentException(Localizable pattern, Object[] arguments) {
		super(pattern, arguments);
	}
}