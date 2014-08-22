import ir.ues.jlwr.regression.SimpleRegression;

import java.io.File;
import java.io.IOException;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartUtilities;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

public class Test {
	public static void main(String[] args) {
		// Create a simple XY chart
		SimpleRegression sr = new SimpleRegression();
		sr.addData(1, 1);
		sr.addData(1, 2);
		sr.addData(2, 1);
		sr.addData(3, 9);
		sr.addData(4, 10);
		sr.regress();
		XYSeries series = new XYSeries("XYGraph");
		double predict = sr.predict(1);
		series.add(1, predict);
		series.add(1, sr.predict(2));
		series.add(2, sr.predict(3));
		double predict2 = sr.predict(4);
		series.add(3, predict2);
		System.out.println(predict2);
		// Add the series to your data set
		XYSeriesCollection dataset = new XYSeriesCollection();
		dataset.addSeries(series);
		// Generate the graph
		JFreeChart chart = ChartFactory.createXYLineChart("XY Chart", // Title
				"x-axis", // x-axis Label
				"y-axis", // y-axis Label
				dataset, // Dataset
				PlotOrientation.VERTICAL, // Plot Orientation
				true, // Show Legend
				true, // Use tooltips
				false // Configure chart to generate URLs?
				);
		try {
			ChartUtilities.saveChartAsJPEG(new File("C:\\chart.jpg"), chart,
					500, 300);
		} catch (IOException e) {
			System.err.println("Problem occurred creating chart.");
		}
	}
}
