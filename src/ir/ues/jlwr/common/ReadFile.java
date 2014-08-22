package ir.ues.jlwr.common;

import ir.ues.jlwr.regression.Pair;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.LineNumberReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import javax.swing.filechooser.FileFilter;
import javax.swing.filechooser.FileNameExtensionFilter;

public class ReadFile {
	private static final int J_OTION_PANE_CANCELL = 2;
	private static final String Y_VALUE = "2";
	private static final String X_VALUE = "1";
	private static final String[] extention = new String[] { "txt", "csv" };
	private File file;

	public ReadFile() throws NonValidFileFormat {
		setFile(getFile());
	}

	private void setFile(File file) {
		this.file = file;
	}
	

	private File getFile() throws NonValidFileFormat {
		JFileChooser jfc = new JFileChooser();
		FileFilter filter = new FileNameExtensionFilter("txt OR Csv", extention);
		jfc.setFileFilter(filter);
		jfc.setCurrentDirectory(new File(System.getProperty("user.dir")));
		jfc.showOpenDialog(null);
		if (jfc.getSelectedFile() != null)
			return jfc.getSelectedFile();
		else
			throw new NonValidFileFormat(NonValidFileFormat.FILE_NOT_SELECTED);
	}

	private Map<String, Number[]> getcontent() throws NonValidFileFormat {
		Map<String, Number[]> snMap = new HashMap<>();
		LineNumberReader lineNumber;
		try {
			lineNumber = new LineNumberReader(new FileReader(file));
			String l;
			while ((l = lineNumber.readLine()) != null
					&& lineNumber.getLineNumber() < 3) {
				Scanner s = new Scanner(l);
				Number[] apl = extractTrain(s);
				snMap.put(lineNumber.getLineNumber() + "", apl);
			}
		} catch (FileNotFoundException e) {
			throw new NonValidFileFormat(e);
		} catch (IOException e) {
			throw new NonValidFileFormat(e);
		}
		return snMap;
	}

	private Number[] extractTrain(Scanner scanner) throws NonValidFileFormat {
		String[] apl;
		String string = scanner.nextLine().trim();
		if (string.contains(" "))
			apl = splitChar(string, " ");
		else if (string.contains(","))
			apl = splitChar(string, ",");
		else if (string.contains("_"))
			apl = splitChar(string, "_");
		else if (string.contains("."))
			apl = splitChar(string, ".");
		else
			throw new NonValidFileFormat(NonValidFileFormat.NO_VALID_SEPERATOR);
		return validateNumericContent(apl);
	}

	private Number[] validateNumericContent(String[] apl)
			throws NonValidFileFormat {
		Number[] number = new Double[apl.length];
		int j = 0;
		for (String string : apl) {
			for (int i = 0; i < string.length(); i++) {
				char charAt = string.charAt(i);
				if (!Character.isDigit(charAt) & charAt != '.' & charAt != '-')
					throw new NonValidFileFormat(
							NonValidFileFormat.NO_VALID_NUMBER);
			}
			System.out.println(string);
			number[j] = Double.valueOf(string);
			j++;
		}
		return number;
	}

	private String[] splitChar(String string, String seperator) {
		return string.split(seperator);
	}

	public List<Pair<Number, Number>> getPairTrainData()
			throws NonValidFileFormat {
		Map<String, Number[]> asd = getcontent();
		List<Pair<Number, Number>> pair = new ArrayList<>();
		int arraylength = getarraylength(asd);
		for (int i = 0; i < arraylength; i++) {
			pair.add(new Pair<Number, Number>(asd.get(X_VALUE)[i], asd
					.get(Y_VALUE)[i]));
		}
		return pair;
	}

	private int getarraylength(Map<String, Number[]> asd) {
		int selectedOption = 0;
		if (islengthEqual(asd))
			selectedOption = JOptionPane.showConfirmDialog(null, "title",
					"message", JOptionPane.OK_CANCEL_OPTION,
					JOptionPane.WARNING_MESSAGE);
		if (selectedOption == J_OTION_PANE_CANCELL)
			System.exit(-1);
		return asd.get(X_VALUE).length > asd.get(Y_VALUE).length ? asd
				.get(Y_VALUE).length : asd.get(X_VALUE).length;
	}

	private boolean islengthEqual(Map<String, Number[]> asd) {
		return asd.get(X_VALUE).length != asd.get(Y_VALUE).length;
	}

}
