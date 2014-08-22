package ir.ues.jlwr.common;

import ir.ues.jlwr.regression.Pair;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class LWR {
	private List<Pair<Number, Number>> pairOfExampleData;
	private Integer NumNeighbehr;
	private Double bandWidth;
	private double queryPoint;

	public LWR(Integer neighbehr, Double bandWidth,
			List<Pair<Number, Number>> pairOfExampleData, double queryPoint) {
		this.NumNeighbehr = neighbehr;
		this.bandWidth = bandWidth;
		this.pairOfExampleData = pairOfExampleData;
		this.queryPoint = queryPoint;
	}

	private List<Pair<Number, Number>> getSortedDistance() {
		Map<Pair<Number, Number>, Double> pairDistnace = new HashMap<>();
		Map<Pair<Number, Number>, Double> kernel = new HashMap<>();
		for (Pair<Number, Number> pair : pairOfExampleData) {
			double distance = Math.sqrt(Math.pow(
					(pair.getKey().doubleValue() - queryPoint), 2));
			pairDistnace.put(pair, distance);
			kernel.put(pair, kernel(distance));

		}
		List<Map.Entry<Pair<Number, Number>, Double>> list = new LinkedList<>(
				pairDistnace.entrySet());
		Collections.sort(list,
				new Comparator<Map.Entry<Pair<Number, Number>, Double>>() {
					@Override
					public int compare(
							Map.Entry<Pair<Number, Number>, Double> o1,
							Map.Entry<Pair<Number, Number>, Double> o2) {
						return (o1.getValue()).compareTo(o2.getValue());
					}
				});

		List<Pair<Number, Number>> ped = new ArrayList<>();
		for (int i = 0; i < NumNeighbehr; i++) {
			Entry<Pair<Number, Number>, Double> entry = list.get(i);
			Pair<Number, Number> pair = entry.getKey();
			Number key = pair.getKey();
			Number value = pair.getValue();
			double v = value.doubleValue() * kernel.get(pair);
			double k = key.doubleValue()
					* kernel.get(pair);
			ped.add(new Pair<Number, Number>(k, v));
		}
		return ped;
	}

	private double kernel(double d) {
		double pow = Math.pow((d / bandWidth), 2);
		double exp = Math.exp(-pow);
		return exp;
	}

	public ClassicReggression getRegresss() {
		return new ClassicReggression(getSortedDistance());

	}
}
