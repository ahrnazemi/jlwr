package ir.ues.jlwr.regression;

import java.util.ArrayList;
import java.util.List;

public class ArgUtils {
	public static Object[] flatten(Object[] array) {
		List list = new ArrayList();
		if (array != null) {
			for (Object o : array) {
				if (o instanceof Object[]) {
					for (Object oR : flatten((Object[]) (Object[]) o))
						list.add(oR);
				} else {
					list.add(o);
				}
			}
		}
		return list.toArray();
	}
}