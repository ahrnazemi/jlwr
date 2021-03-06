/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ir.ues.jlwr.common;

import ir.ues.jlwr.regression.SimpleRegression;

import java.awt.BorderLayout;
import java.awt.Font;
import java.awt.FontFormatException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Locale;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.swing.SpinnerModel;
import javax.swing.SpinnerNumberModel;

import org.jfree.chart.ChartPanel;

/**
 * 
 * @author Novin Pendar
 */
public class GUI extends javax.swing.JFrame {
	static Object bundle;

	/**
	 * Creates new form GUI
	 */
	public GUI() {
		initComponents();
		loadingImage.setVisible(false);
		PredictJtext.setEditable(false);

	}

	/**
	 * This method is called from within the constructor to initialize the form.
	 * WARNING: Do NOT modify this code. The content of this method is always
	 * regenerated by the Form Editor.
	 */
	@SuppressWarnings("unchecked")
	// <editor-fold defaultstate="collapsed"
	// <editor-fold defaultstate="collapsed"
	// <editor-fold defaultstate="collapsed"
	// <editor-fold defaultstate="collapsed"
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jPanel2 = new javax.swing.JPanel();
        numberOfNeighber = new javax.swing.JSpinner();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        BandWidth = new javax.swing.JSpinner();
        jPanel3 = new javax.swing.JPanel();
        PredictJtext = new javax.swing.JTextField();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        LRResoult = new javax.swing.JLabel();
        LWRResult = new javax.swing.JLabel();
        jLabel1 = new javax.swing.JLabel();
        jButton1 = new javax.swing.JButton();
        jPanel4 = new javax.swing.JPanel();
        Lang = new javax.swing.JComboBox();
        jTabbedPane1 = new javax.swing.JTabbedPane();
        CLREGjPanel6 = new javax.swing.JPanel();
        LWRjPanel7 = new javax.swing.JPanel();
        jMenuBar1 = new javax.swing.JMenuBar();
        jMenu1 = new javax.swing.JMenu();
        LoadFile = new javax.swing.JMenuItem();
        jSeparator1 = new javax.swing.JPopupMenu.Separator();
        jMenu2 = new javax.swing.JMenu();
        loadingImage = new javax.swing.JMenu();
        jMenuItem1 = new javax.swing.JMenuItem();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        java.util.ResourceBundle bundle = java.util.ResourceBundle.getBundle("Bundlemsg_fa"); // NOI18N
        setTitle(bundle.getString("JLWR")); // NOI18N
        //setFont(new java.awt.Font("B Nazanin", 0, 12)); // NOI18N
        setLocationByPlatform(true);
        setName("mainFrame"); // NOI18N

        jPanel2.setBorder(javax.swing.BorderFactory.createTitledBorder(null, bundle.getString("LWR Parameter"), 0, 0, getFont())); // NOI18N

        numberOfNeighber.setModel(new javax.swing.SpinnerNumberModel(Integer.valueOf(0), Integer.valueOf(0), null, Integer.valueOf(1)));
        numberOfNeighber.setEditor(new javax.swing.JSpinner.NumberEditor(numberOfNeighber, ""));

        jLabel4.setText(bundle.getString("NumnerOfNeighbouhr")); // NOI18N

        jLabel5.setText(bundle.getString("BandWidth")); // NOI18N

        BandWidth.setModel(new javax.swing.SpinnerNumberModel(1.0d, 0.0d, 1.0d, 0.1d));

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel4)
                    .addComponent(jLabel5))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(numberOfNeighber, javax.swing.GroupLayout.DEFAULT_SIZE, 62, Short.MAX_VALUE)
                    .addComponent(BandWidth))
                .addContainerGap(32, Short.MAX_VALUE))
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(numberOfNeighber, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel4))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel5)
                    .addComponent(BandWidth, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(0, 0, Short.MAX_VALUE))
        );

        jPanel3.setBorder(javax.swing.BorderFactory.createTitledBorder(null, bundle.getString("General"), 0, 0, getFont())); // NOI18N

        jLabel2.setFont(getFont());
        jLabel2.setText(bundle.getString("LinearRegression")); // NOI18N

        jLabel3.setFont(getFont());
        jLabel3.setText(bundle.getString("LWR")); // NOI18N

        LRResoult.setText("-----------");

        LWRResult.setFont(new java.awt.Font("Arial", 0, 14)); // NOI18N
        LWRResult.setText("----------");

        jLabel1.setFont(getFont());
        jLabel1.setText(bundle.getString("QueryPoint")); // NOI18N

        jButton1.setFont(getFont());
        jButton1.setText(bundle.getString("Estimate")); // NOI18N
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                try {
					jButton1ActionPerformed(evt);
				} catch (NonValidFileFormat e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
            }
        });

        javax.swing.GroupLayout jPanel3Layout = new javax.swing.GroupLayout(jPanel3);
        jPanel3.setLayout(jPanel3Layout);
        jPanel3Layout.setHorizontalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel3Layout.createSequentialGroup()
                .addGap(24, 24, 24)
                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel2)
                    .addComponent(jLabel3))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel3Layout.createSequentialGroup()
                        .addComponent(LRResoult, javax.swing.GroupLayout.PREFERRED_SIZE, 127, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addContainerGap())
                    .addComponent(jButton1, javax.swing.GroupLayout.Alignment.TRAILING)))
            .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(jPanel3Layout.createSequentialGroup()
                    .addGap(24, 24, 24)
                    .addComponent(jLabel1)
                    .addGap(68, 68, 68)
                    .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(PredictJtext, javax.swing.GroupLayout.DEFAULT_SIZE, 125, Short.MAX_VALUE)
                        .addGroup(jPanel3Layout.createSequentialGroup()
                            .addComponent(LWRResult, javax.swing.GroupLayout.PREFERRED_SIZE, 119, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addGap(0, 8, Short.MAX_VALUE)))
                    .addContainerGap()))
        );
        jPanel3Layout.setVerticalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel3Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel2, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 14, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(LRResoult, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel3Layout.createSequentialGroup()
                        .addComponent(jLabel3)
                        .addGap(21, 21, 21))
                    .addComponent(jButton1, javax.swing.GroupLayout.Alignment.TRAILING)))
            .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(jPanel3Layout.createSequentialGroup()
                    .addContainerGap()
                    .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                        .addComponent(jLabel1)
                        .addComponent(PredictJtext, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 35, Short.MAX_VALUE)
                    .addComponent(LWRResult, javax.swing.GroupLayout.PREFERRED_SIZE, 28, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGap(21, 21, 21)))
        );

        jPanel4.setBorder(javax.swing.BorderFactory.createTitledBorder(null, bundle.getString("Other"), 0, 0, getFont())); // NOI18N

        Lang.setModel(new javax.swing.DefaultComboBoxModel(new String[] { "En", "Fa" }));
        Lang.addItemListener(new java.awt.event.ItemListener() {
            public void itemStateChanged(java.awt.event.ItemEvent evt) {
                LangItemStateChanged(evt);
            }
        });

        javax.swing.GroupLayout jPanel4Layout = new javax.swing.GroupLayout(jPanel4);
        jPanel4.setLayout(jPanel4Layout);
        jPanel4Layout.setHorizontalGroup(
            jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel4Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(Lang, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel4Layout.setVerticalGroup(
            jPanel4Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel4Layout.createSequentialGroup()
                .addComponent(Lang, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 95, Short.MAX_VALUE))
        );

        CLREGjPanel6.setFont(getFont());

        javax.swing.GroupLayout CLREGjPanel6Layout = new javax.swing.GroupLayout(CLREGjPanel6);
        CLREGjPanel6.setLayout(CLREGjPanel6Layout);
        CLREGjPanel6Layout.setHorizontalGroup(
            CLREGjPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 779, Short.MAX_VALUE)
        );
        CLREGjPanel6Layout.setVerticalGroup(
            CLREGjPanel6Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 343, Short.MAX_VALUE)
        );

        jTabbedPane1.addTab(bundle.getString("LinearRegression"), CLREGjPanel6); // NOI18N

        LWRjPanel7.setFont(getFont());

        javax.swing.GroupLayout LWRjPanel7Layout = new javax.swing.GroupLayout(LWRjPanel7);
        LWRjPanel7.setLayout(LWRjPanel7Layout);
        LWRjPanel7Layout.setHorizontalGroup(
            LWRjPanel7Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 779, Short.MAX_VALUE)
        );
        LWRjPanel7Layout.setVerticalGroup(
            LWRjPanel7Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 343, Short.MAX_VALUE)
        );

        jTabbedPane1.addTab(bundle.getString("LWR"), LWRjPanel7); // NOI18N

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jTabbedPane1)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jPanel3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(18, 18, 18)
                        .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jPanel4, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(0, 0, Short.MAX_VALUE)
                        .addComponent(jPanel4, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addComponent(jPanel2, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jPanel3, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jTabbedPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 371, javax.swing.GroupLayout.PREFERRED_SIZE))
        );

        jMenu1.setText(bundle.getString("File")); // NOI18N

        LoadFile.setFont(getFont());
        LoadFile.setIcon(new javax.swing.ImageIcon(getClass().getResource("/ir/ues/image/go-up.gif"))); // NOI18N
        LoadFile.setText(bundle.getString("LoadFile")); // NOI18N
        LoadFile.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                LoadFileActionPerformed(evt);
            }
        });
        jMenu1.add(LoadFile);
        jMenu1.add(jSeparator1);

        jMenuBar1.add(jMenu1);

        jMenu2.setText(bundle.getString("Help")); // NOI18N
        jMenu2.setFont(getFont());
        jMenuBar1.add(jMenu2);

        loadingImage.setIcon(new javax.swing.ImageIcon(getClass().getResource("/ir/ues/image/loading-balls.gif"))); // NOI18N
        loadingImage.setOpaque(true);

        jMenuItem1.setText("Exit");
        jMenuItem1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jMenuItem1ActionPerformed(evt);
            }
        });
        loadingImage.add(jMenuItem1);

        jMenuBar1.add(loadingImage);

        setJMenuBar(jMenuBar1);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

	private void jButton1ActionPerformed(java.awt.event.ActionEvent evt)
			throws NonValidFileFormat {// GEN-FIRST:event_jButton1ActionPerformed
		try {
			double d = Double.valueOf(PredictJtext.getText());
			LRResoult.setText("" + getCr().getSimpleRegression().predict(d));
			Integer neighbehr = Integer.valueOf(numberOfNeighber.getValue()
					.toString());
			Double bandWidth = Double.valueOf(BandWidth.getValue().toString());
			LWR lwr = new LWR(neighbehr, bandWidth, getCr()
					.getPairOfExampleData(), d);
			ClassicReggression regresss = lwr.getRegresss();
			CreateXYChart crxy = new CreateXYChart(regresss);
			
			LWRjPanel7.setLayout(new java.awt.BorderLayout());
			ChartPanel CP = new ChartPanel(crxy.createXYChart());
			LWRjPanel7.add(CP, BorderLayout.CENTER);
			LWRjPanel7.validate();
			SimpleRegression simpleRegression = regresss.getSimpleRegression();
			simpleRegression.regress();
			LWRResult.setText("" + simpleRegression.predict(d));

		} catch (Exception e) {
			throw new NonValidFileFormat(MessageService.getResourceBundle()
					.getString("NOValidNumber"));
		}

	}// GEN-LAST:event_jButton1ActionPerformed

	private void getLabelText(java.util.ResourceBundle bundle) {
		jMenu2.setText(bundle.getString("Help")); // NOI18N
		LoadFile.setText(bundle.getString("LoadFile")); // NOI18N
		jMenu1.setText(bundle.getString("File")); // NOI18N
		jLabel1.setText(bundle.getString("QueryPoint")); // NOI18N
		jLabel2.setText(bundle.getString("LinearRegression")); // NOI18N
		jLabel4.setText(bundle.getString("NumnerOfNeighbouhr")); // NOI18N
		jLabel5.setText(bundle.getString("BandWidth")); // NOI18N
		jLabel3.setText(bundle.getString("LWR")); // NOI18N

	}

	private void jMenuItem1ActionPerformed(java.awt.event.ActionEvent evt) {// GEN-FIRST:event_jMenuItem1ActionPerformed
		System.exit(-1);
	}// GEN-LAST:event_jMenuItem1ActionPerformed

	private void LangItemStateChanged(java.awt.event.ItemEvent evt) {// GEN-FIRST:event_LangItemStateChanged
		getLabelText(MessageService.getResourceBundle());
	}// GEN-LAST:event_LangItemStateChanged

	ClassicReggression cr;

	public ClassicReggression getCr() {
		return cr;
	}

	private void LoadFileActionPerformed(java.awt.event.ActionEvent evt) {// GEN-FIRST:event_LoadFileActionPerformed
		try {
			loadingImage.setVisible(true);
			ReadFile rf = new ReadFile();
			cr = new ClassicReggression(rf.getPairTrainData());
			CreateXYChart crxy = new CreateXYChart(cr);
			CLREGjPanel6.setLayout(new java.awt.BorderLayout());
			ChartPanel CP = new ChartPanel(crxy.createXYChart());
			CLREGjPanel6.add(CP, BorderLayout.CENTER);
			CLREGjPanel6.validate();
			PredictJtext.setEditable(true);
			int neighberSize = rf.getPairTrainData().size();
			SpinnerModel sm = new SpinnerNumberModel(neighberSize, 0,
					neighberSize, 1);
			numberOfNeighber.setModel(sm);
			numberOfNeighber.setValue(neighberSize);
			numberOfNeighber.revalidate();
			loadingImage.setVisible(false);
		} catch (NonValidFileFormat ex) {
			Logger.getLogger(GUI.class.getName()).log(Level.SEVERE, null, ex);
		}
	}// GEN-LAST:event_LoadFileActionPerformed

	/**
	 * @param args
	 *            the command line arguments
	 */
	public static void main(String args[]) {
		/* Set the Nimbus look and feel */
		// <editor-fold defaultstate="collapsed"
		// desc=" Look and feel setting code (optional) ">
		/*
		 * If Nimbus (introduced in Java SE 6) is not available, stay with the
		 * default look and feel. For details see
		 * http://download.oracle.com/javase
		 * /tutorial/uiswing/lookandfeel/plaf.html
		 */
		try {
			for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager
					.getInstalledLookAndFeels()) {
				if ("Nimbus".equals(info.getName())) {
					javax.swing.UIManager.setLookAndFeel(info.getClassName());
					break;
				}
			}
		} catch (ClassNotFoundException ex) {
			java.util.logging.Logger.getLogger(GUI.class.getName()).log(
					java.util.logging.Level.SEVERE, null, ex);
		} catch (InstantiationException ex) {
			java.util.logging.Logger.getLogger(GUI.class.getName()).log(
					java.util.logging.Level.SEVERE, null, ex);
		} catch (IllegalAccessException ex) {
			java.util.logging.Logger.getLogger(GUI.class.getName()).log(
					java.util.logging.Level.SEVERE, null, ex);
		} catch (javax.swing.UnsupportedLookAndFeelException ex) {
			java.util.logging.Logger.getLogger(GUI.class.getName()).log(
					java.util.logging.Level.SEVERE, null, ex);
		}
		// </editor-fold>

		/* Create and display the form */
		java.awt.EventQueue.invokeLater(new Runnable() {
			public void run() {
				new GUI().setVisible(true);
			}
		});
	}

	@Override
	public Font getFont() {
		return super.getFont();
//		try {
//			if (!MessageService.getResourceBundle().getLocale()
//					.equals(Locale.ENGLISH)) {
//				InputStream is = GUI.class.getResourceAsStream("BNazanin.ttf");
//				Font font = Font.createFont(Font.TRUETYPE_FONT, is);
//				font = font.deriveFont(14f);
//				return font;
//			}
//			return super.getFont();
//		} catch (FontFormatException | IOException | NullPointerException ex) {
//			Logger.getLogger(GUI.class.getName()).log(Level.SEVERE, null, ex);
//			return super.getFont();
//		}
	}

    // Variables declaration - do not modify//GEN-BEGIN:variables
    public static javax.swing.JSpinner BandWidth;
    private javax.swing.JPanel CLREGjPanel6;
    private javax.swing.JLabel LRResoult;
    private javax.swing.JLabel LWRResult;
    private javax.swing.JPanel LWRjPanel7;
    public static javax.swing.JComboBox Lang;
    private javax.swing.JMenuItem LoadFile;
    private javax.swing.JTextField PredictJtext;
    private javax.swing.JButton jButton1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JMenu jMenu1;
    private javax.swing.JMenu jMenu2;
    private javax.swing.JMenuBar jMenuBar1;
    private javax.swing.JMenuItem jMenuItem1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JPanel jPanel4;
    private javax.swing.JPopupMenu.Separator jSeparator1;
    private javax.swing.JTabbedPane jTabbedPane1;
    public static javax.swing.JMenu loadingImage;
    public static javax.swing.JSpinner numberOfNeighber;
    // End of variables declaration//GEN-END:variables
}
