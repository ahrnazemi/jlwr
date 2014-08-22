package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.MathIllegalArgumentException;

public class NoDataException extends MathIllegalArgumentException {
	private static final long serialVersionUID = -3629324471511904459L;

	public NoDataException() {
		this(LocalizedFormats.NO_DATA);
	}

	public NoDataException(Localizable specific) {
		super(specific, new Object[0]);
	}
}