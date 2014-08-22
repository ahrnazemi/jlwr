package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.MathIllegalNumberException;

public class DimensionMismatchException extends MathIllegalNumberException {
	private static final long serialVersionUID = -8415396756375798143L;
	private final int dimension;

	public DimensionMismatchException(Localizable specific, int wrong,
			int expected) {
		super(specific, Integer.valueOf(wrong), new Object[] { Integer
				.valueOf(expected) });
		this.dimension = expected;
	}

	public DimensionMismatchException(int wrong, int expected) {
		this(LocalizedFormats.DIMENSIONS_MISMATCH_SIMPLE, wrong, expected);
	}

	public int getDimension() {
		return this.dimension;
	}
}