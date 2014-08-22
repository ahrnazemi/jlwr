package ir.ues.jlwr.common;

import ir.ues.jlwr.regression.SimpleRegression;

import java.io.File;
import java.io.IOException;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartUtilities;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

public class CreateXYChart {
	private static final int SLICE = 100;
	public static final String C_R_ADDRESS_FILE = System
			.getProperty("user.dir");
	private ClassicReggression cr;

	public ClassicReggression getCr() {
		return cr;
	}

	public CreateXYChart(ClassicReggression cr) {
		this.cr = cr;
	}

	public JFreeChart createXYChart() throws NonValidFileFormat {
		XYSeriesCollection dataset = new XYSeriesCollection();
		dataset.addSeries(createXYSeries());
		JFreeChart chart = ChartFactory.createXYLineChart(MessageService
				.getResourceBundle().getString("XY-Chart"), // Title
				MessageService.getResourceBundle().getString("x-axis"), // x-axis
																		// Label
				MessageService.getResourceBundle().getString("y-axis"), // y-axis
																		// Label
				dataset, // Dataset
				PlotOrientation.VERTICAL, // Plot Orientation
				true, // Show Legend
				true, // Use tooltips
				false // Configure chart to generate URLs?
				);
		return chart;
	}

	private XYSeries createXYSeries() throws NonValidFileFormat {
		XYSeries series = new XYSeries(MessageService.getResourceBundle()
				.getString("XYGraph"));
		SimpleRegression simpleRegression = getCr().getSimpleRegression();
		double min = getCr().getMin();
		double max = getCr().getMax();
		for (double i = min; i < max; i = i + (max - min) / SLICE) {
			series.add(i, simpleRegression.predict(i));
		}
		return series;
	}

	public File SaveChart() throws IOException, NonValidFileFormat {
		File imageFile = new File(C_R_ADDRESS_FILE + "/"
				+ System.currentTimeMillis() + ".jpg");
		//ChartUtilities.saveChartAsJPEG(imageFile, createXYChart(),
			//	(int) GUI.getWidthLabel(), (int) GUI.getHeightLabel());
		return imageFile;
	}

}
