package ir.ues.jlwr.regression;

import ir.ues.jlwr.regression.exception.MaxCountExceededException;

public class Incrementor {
	private int maximalCount;
	private int count;
	private final MaxCountExceededCallback maxCountCallback;

	public Incrementor() {
		this(0);
	}

	public Incrementor(int max) {
		this(max, new MaxCountExceededCallback() {
			public void trigger(int max) {
				throw new MaxCountExceededException(Integer.valueOf(max));
			}
		});
	}

	public Incrementor(int max, MaxCountExceededCallback cb) {
		this.count = 0;

		this.maximalCount = max;
		this.maxCountCallback = cb;
	}

	public void setMaximalCount(int max) {
		this.maximalCount = max;
	}

	public int getMaximalCount() {
		return this.maximalCount;
	}

	public int getCount() {
		return this.count;
	}

	public boolean canIncrement() {
		return (this.count < this.maximalCount);
	}

	public void incrementCount(int value) {
		for (int i = 0; i < value; ++i)
			incrementCount();
	}

	public void incrementCount() {
		if (++this.count > this.maximalCount)
			this.maxCountCallback.trigger(this.maximalCount);
	}

	public void resetCount() {
		this.count = 0;
	}

	public static abstract interface MaxCountExceededCallback {
		public abstract void trigger(int paramInt);
	}
}