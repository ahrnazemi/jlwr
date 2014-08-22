package ir.ues.jlwr.common;

import java.util.ResourceBundle;

import javax.swing.JOptionPane;

public class NonValidFileFormat extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public static final String NO_VALID_SEPERATOR = "noValidSeperator";
	public static final String SIZE_NOT_EQUAL = "sizeNotEqual";
	public static final String NO_VALID_NUMBER = "novalidNumber";
	public static final String FILE_NOT_SELECTED = "fileNotSelected";

	public NonValidFileFormat(String msg) {
		ResourceBundle resourceBundle = MessageService.getResourceBundle();
		JOptionPane.showMessageDialog(null, resourceBundle.getString(msg),
				resourceBundle.getString("fileReadError"),
				JOptionPane.ERROR_MESSAGE);
	}

	public NonValidFileFormat(Exception e) {
		JOptionPane.showMessageDialog(null, e.getLocalizedMessage(),
				"Exception!", JOptionPane.ERROR_MESSAGE);
	}
}
