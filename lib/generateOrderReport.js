import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const defaultData = {


    branding: {
        logo: "/logo.png", // base64 OR public URL
    },

    client: {
        name: "John Doe",
        email: "john@email.com",
        phone: "+44 7700 900123",
        address: "221B Baker Street, London, UK",
    },



    title: "Client Prescription",



    prescription: {
        rows: [
            { eye: "OD", sph: "-4.00", cyl: "-4.00", axis: "3", add: "0", spd: "" },
            { eye: "OS", sph: "0", cyl: "-3.25", axis: "15", add: "0", spd: "" },
        ],
    },

    prism: {
        rows: [
            { eye: "OD", vertPrism: "2.00", vertBase: "Up", horizPrism: "1.00", horizBase: "In" },
            { eye: "OS", vertPrism: "1.50", vertBase: "Up", horizPrism: "0.50", horizBase: "In" },
        ],
    },

    lineItems: [
        { label: "Elegance TF2249", value: "£336" },
        { label: "distance", value: "Free" },
        { label: "Prism", value: "£15" },
        { label: "Surfacing charge", value: "£14" },
    ],

    subtotal: "£365",
};






// Logo Support Function
const loadImage = (url) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = url;
        img.onload = () => resolve(img);
    });
};









async function generateOrderReport(data = defaultData, filename = "order-report.pdf") {

    const doc = new jsPDF({ unit: "pt", format: "a4" });

    const pageW = doc.internal.pageSize.getWidth();
    const margin = 40;
    const contentW = pageW - margin * 2;

    let y = 50;



    // ── BRANDING HEADER ─────────────────────────────────────────

    // Logo
    if (data.branding?.logo) {
        const img = await loadImage(data.branding.logo);
        doc.addImage(img, "PNG", 30, 30, 180, 60);
    }


    // Client Info Box
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);

    let clientY = 35;

    doc.text(`Client: ${data.client?.name || ""}`, pageW - 40, clientY, { align: "right" });
    clientY += 14;
    doc.text(`Email: ${data.client?.email || ""}`, pageW - 40, clientY, { align: "right" });
    clientY += 14;
    doc.text(`Phone: ${data.client?.phone || ""}`, pageW - 40, clientY, { align: "right" });
    clientY += 14;
    doc.text(`Address: ${data.client?.address || ""}`, pageW - 40, clientY, { align: "right" });

    y += 40;












    y += 35;

    // SUBTITLE
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(30, 30, 30);
    doc.text(data.title, pageW / 2, y, { align: "center" });

    y += 30;

    // SECTION LABEL
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(100, 120, 140);
    doc.text("Prescription Details", 40, y);

    y += 10;

    // PRESCRIPTION TABLE
    const rxHead = [["", "SPH", "CYL", "Axis", "ADD", "S-PD"]];
    const rxBody = data.prescription.rows.map((r) => [
        r.eye, r.sph, r.cyl, r.axis, r.add, r.spd,
    ]);

    autoTable(doc, {
        startY: y,
        head: rxHead,
        body: rxBody,
        theme: "grid",
        margin: { left: 40, right: 40 },
        headStyles: {
            fillColor: [245, 245, 245],
            textColor: [40, 40, 40],
            fontStyle: "bold",
            halign: "center",
            fontSize: 10,
        },
        bodyStyles: {
            halign: "center",
            textColor: [50, 50, 50],
            fontSize: 10,
        },
        columnStyles: {
            0: { halign: "center", fontStyle: "bold" },
        },
        styles: {
            lineColor: [200, 200, 200],
            lineWidth: 0.5,
        },
    });

    y = doc.lastAutoTable.finalY + 20;

    // PRISM TABLE
    const prismHead = [
        [
            "",
            "Vertical Prism (\u0394)",
            "Base Direction",
            "Horizontal Prism (\u0394)",
            "Base Direction",
        ],
    ];
    const prismBody = data.prism.rows.map((r) => [
        r.eye, r.vertPrism, r.vertBase, r.horizPrism, r.horizBase,
    ]);

    autoTable(doc, {
        startY: y,
        head: prismHead,
        body: prismBody,
        theme: "grid",
        margin: { left: 40, right: 40 },
        headStyles: {
            fillColor: [245, 245, 245],
            textColor: [40, 40, 40],
            fontStyle: "bold",
            halign: "center",
            fontSize: 10,
        },
        bodyStyles: {
            halign: "center",
            textColor: [50, 50, 50],
            fontSize: 10,
        },
        columnStyles: {
            0: { halign: "center", fontStyle: "bold" },
        },
        styles: {
            lineColor: [200, 200, 200],
            lineWidth: 0.5,
        },
    });

    y = doc.lastAutoTable.finalY + 25;

    // LINE ITEMS
    doc.setFontSize(11);
    doc.setTextColor(50, 50, 50);

    data.lineItems.forEach((item) => {
        doc.setFont("helvetica", "normal");
        doc.text(item.label, 40, y);
        doc.text(item.value, pageW - 40, y, { align: "right" });
        y += 20;
    });

    // DIVIDER
    y += 5;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.7);
    doc.line(40, y, pageW - 40, y);
    y += 18;

    // SUBTOTAL
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(20, 20, 20);
    doc.text("Subtotal", 40, y);
    doc.text(data.subtotal, pageW - 40, y, { align: "right" });

    // SAVE
    doc.save(filename);
}

export default generateOrderReport;
