package ir.ues.jlwr.regression.exception;

import ir.ues.jlwr.regression.Localizable;
import ir.ues.jlwr.regression.LocalizedFormats;

public class NoBracketingException extends MathIllegalArgumentException {
	private static final long serialVersionUID = -3629324471511904459L;
	private final double lo;
	private final double hi;
	private final double fLo;
	private final double fHi;

	public NoBracketingException(double lo, double hi, double fLo, double fHi) {
		this(LocalizedFormats.SAME_SIGN_AT_ENDPOINTS, lo, hi, fLo, fHi,
				new Object[0]);
	}

	public NoBracketingException(Localizable specific, double lo, double hi,
			double fLo, double fHi, Object[] args) {
		super(specific, new Object[] { Double.valueOf(lo), Double.valueOf(hi),
				Double.valueOf(fLo), Double.valueOf(fHi), args });
		this.lo = lo;
		this.hi = hi;
		this.fLo = fLo;
		this.fHi = fHi;
	}

	public double getLo() {
		return this.lo;
	}

	public double getHi() {
		return this.hi;
	}

	public double getFLo() {
		return this.fLo;
	}

	public double getFHi() {
		return this.fHi;
	}
}