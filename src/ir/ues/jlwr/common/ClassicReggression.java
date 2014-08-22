package ir.ues.jlwr.common;

import ir.ues.jlwr.regression.Pair;
import ir.ues.jlwr.regression.RegressionResults;
import ir.ues.jlwr.regression.SimpleRegression;

import java.util.List;

public class ClassicReggression {
	private List<Pair<Number, Number>> pairOfExampleData;
	private Double min;

	private Double max;

	public double getMax() {
		if (max == null)
			fillRegressionData();
		return max;
	}

	public double getMin() {
		if (min == null)
			fillRegressionData();
		return min;
	}

	public ClassicReggression(List<Pair<Number, Number>> pairTrainData) {
		this.pairOfExampleData = pairTrainData;
	}

	public List<Pair<Number, Number>> getPairOfExampleData()
			throws NonValidFileFormat {
		return pairOfExampleData;
	}

	public void setPairOfExampleData(
			List<Pair<Number, Number>> pairOfExampleData) {
		this.pairOfExampleData = pairOfExampleData;
	}

	public SimpleRegression getSimpleRegression() {
		return fillRegressionData();
	}

	public RegressionResults getRegressionResult() {
		return getSimpleRegression().regress();
	}

	private SimpleRegression fillRegressionData() {
		SimpleRegression sr = new SimpleRegression();
		min = Double.MAX_VALUE;
		max =- Double.MIN_VALUE;
		for (Pair<Number, Number> pair : pairOfExampleData) {
			double key = pair.getKey().doubleValue();
			System.out.println(key);
			if (key > max)
				max = key;
			if (key < min)
				min = key;
			sr.addData(key, pair.getValue().doubleValue());
		}
		return sr;
	}

}
