import path from "path";
import { NextResponse } from "next/server";
import { promises as fs } from "fs"; // Utilisation des promesses avec fs

export async function GET() {
  try {
    // Chemin vers le fichier PDF
    const filePath = path.join(
      process.cwd(),
      "public",
      "pdf",
      "CV_Dimitri_Mabom.pdf"
    );

    // Lire le fichier PDF
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CV_Dimitri_Mabom.pdf"',
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération du fichier PDF :", error);
    return NextResponse.json(
      { message: "Erreur lors de la récupération du fichier PDF." },
      { status: 500 }
    );
  }
}
