package ir.ues.jlwr.common;

import java.util.Locale;
import java.util.ResourceBundle;

public class MessageService {
	public static final String BUNDLEMSG_FA = "Bundlemsg_fa";
	public static final String BUNDLEMSG_EN = "Bundlemsg_en";;

	public static ResourceBundle getResourceBundle() {
		try {
			if (GUI.Lang.getSelectedItem().toString().equals("Fa")) {
				return ResourceBundle.getBundle(BUNDLEMSG_FA, new Locale(
						"fa_IR"));
			} else
				return EN_boundle();
		} catch (Exception e) {

			return EN_boundle();
		}

	}

	private static ResourceBundle EN_boundle() {
		return ResourceBundle.getBundle(BUNDLEMSG_EN, Locale.ENGLISH);
	}

}
