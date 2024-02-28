import { Document, Image, Page, StyleSheet, View } from "@react-pdf/renderer";

import PdfTemplate from "../assets/pdf_template.jpg";
function PdfSign() {
  const url = window.location.href;
  const qrCodeUl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
  const styles = StyleSheet.create({
    view: {
      width: "100%",
      height: "100%",
    },
    image: {
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    logo: {
      position: "absolute",
      bottom: "10%",
      left: "25.1%",
      width: "113rem",
      height: "113rem",
    },
  });
  return (
    <Document>
      <Page size="A4" orientation="landscape">
        <View style={styles.view}>
          <Image src={PdfTemplate} style={styles.image} />
          <Image src={qrCodeUl} style={styles.logo} />
        </View>
      </Page>
    </Document>
  );
}

export default PdfSign;
