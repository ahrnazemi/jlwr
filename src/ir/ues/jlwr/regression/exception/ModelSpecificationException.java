package ir.ues.jlwr.regression.exception;

import ir.ues.jlwr.regression.Localizable;

public class ModelSpecificationException extends MathIllegalArgumentException {
	private static final long serialVersionUID = 4206514456095401070L;

	public ModelSpecificationException(Localizable pattern, Object[] args) {
		super(pattern, args);
	}
}