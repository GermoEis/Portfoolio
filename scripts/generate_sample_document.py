from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "documents" / "naidisdokument.pdf"
PAGE_WIDTH, PAGE_HEIGHT = A4
MARGIN = 48


def register_fonts():
    regular = Path("C:/Windows/Fonts/arial.ttf")
    bold = Path("C:/Windows/Fonts/arialbd.ttf")
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("SiteSans", regular))
        pdfmetrics.registerFont(TTFont("SiteSans-Bold", bold))
        return "SiteSans", "SiteSans-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()


def text(pdf, x, y, value, size=9, color="#273234", bold=False):
    pdf.setFillColor(colors.HexColor(color))
    pdf.setFont(FONT_BOLD if bold else FONT, size)
    pdf.drawString(x, y, value)


def field(pdf, x, y, label, value, width=150):
    text(pdf, x, y, label.upper(), 7, "#6c7778", True)
    text(pdf, x, y - 16, value, 10, "#1f2b2d", True)
    pdf.setStrokeColor(colors.HexColor("#d6dcda"))
    pdf.line(x, y - 22, x + width, y - 22)


def page_header(pdf, page_title, page_number):
    pdf.setFillColor(colors.HexColor("#174f42"))
    pdf.rect(0, PAGE_HEIGHT - 72, PAGE_WIDTH, 72, fill=1, stroke=0)
    text(pdf, MARGIN, PAGE_HEIGHT - 40, "NÄIDIS OÜ", 14, "#ffffff", True)
    text(pdf, MARGIN, PAGE_HEIGHT - 56, "Fiktiivne dokumenditöötluse näidis", 8, "#dcebe6")
    text(pdf, PAGE_WIDTH - 155, PAGE_HEIGHT - 43, page_title, 12, "#ffffff", True)
    text(pdf, PAGE_WIDTH - 88, 28, f"Lehekülg {page_number}/2", 8, "#6c7778")


def draw_table(pdf, y, rows, headers=None):
    columns = [MARGIN, 96, 318, 380, 446, PAGE_WIDTH - MARGIN]
    headers = headers or ["Rida", "Kirjeldus", "Kogus", "Ühik", "Summa"]
    row_height = 28

    pdf.setFillColor(colors.HexColor("#eef2f0"))
    pdf.rect(MARGIN, y - row_height, PAGE_WIDTH - 2 * MARGIN, row_height, fill=1, stroke=0)
    for index, header in enumerate(headers):
        text(pdf, columns[index] + 7, y - 18, header, 8, "#344142", True)

    current_y = y - row_height
    for row in rows:
        current_y -= row_height
        pdf.setStrokeColor(colors.HexColor("#d8dddb"))
        pdf.line(MARGIN, current_y, PAGE_WIDTH - MARGIN, current_y)
        for index, value in enumerate(row):
            text(pdf, columns[index] + 7, current_y + 10, str(value), 8, "#2d393a")

    for x in columns:
        pdf.setStrokeColor(colors.HexColor("#d8dddb"))
        pdf.line(x, current_y, x, y)
    return current_y


def first_page(pdf):
    page_header(pdf, "SAATEKIRI", 1)
    text(pdf, MARGIN, PAGE_HEIGHT - 112, "Dokumendi andmed", 16, "#172326", True)
    text(
        pdf,
        MARGIN,
        PAGE_HEIGHT - 132,
        "Näidis, millelt moodulid loevad teksti, metaandmeid ja dokumendipiire.",
        9,
        "#596667",
    )

    field(pdf, MARGIN, PAGE_HEIGHT - 174, "Dokumendi nr", "ND-2026-0142")
    field(pdf, 230, PAGE_HEIGHT - 174, "Kuupäev", "14.07.2026", 120)
    field(pdf, 390, PAGE_HEIGHT - 174, "Viitenumber", "1422026", 155)
    field(pdf, MARGIN, PAGE_HEIGHT - 232, "Saatja", "Näidis OÜ")
    field(pdf, 230, PAGE_HEIGHT - 232, "Saaja", "Testettevõte AS", 190)
    field(pdf, 458, PAGE_HEIGHT - 232, "Tellimus", "T-3821", 87)

    text(pdf, MARGIN, PAGE_HEIGHT - 292, "Tarne sisu", 12, "#172326", True)
    bottom = draw_table(
        pdf,
        PAGE_HEIGHT - 306,
        [
            ["1", "Arhiivikarp, happevaba", "12", "tk", "84,00"],
            ["2", "Dokumendikaust A4", "24", "tk", "57,60"],
            ["3", "Transporditeenus", "1", "teenus", "32,00"],
        ],
    )

    text(pdf, 390, bottom - 34, "Vahesumma", 9, "#596667")
    text(pdf, 500, bottom - 34, "173,60 €", 9, "#172326", True)
    text(pdf, 390, bottom - 54, "Käibemaks", 9, "#596667")
    text(pdf, 500, bottom - 54, "38,19 €", 9, "#172326", True)
    pdf.setStrokeColor(colors.HexColor("#bfc8c4"))
    pdf.line(390, bottom - 65, PAGE_WIDTH - MARGIN, bottom - 65)
    text(pdf, 390, bottom - 84, "Kokku", 10, "#172326", True)
    text(pdf, 492, bottom - 84, "211,79 €", 11, "#174f42", True)

    pdf.setFillColor(colors.HexColor("#f5f7f5"))
    pdf.roundRect(MARGIN, 70, PAGE_WIDTH - 2 * MARGIN, 62, 3, fill=1, stroke=0)
    text(pdf, MARGIN + 14, 111, "TÖÖTLUSE MÄRKUS", 7, "#657172", True)
    text(pdf, MARGIN + 14, 94, "Dokument sisaldab saatekirja ja eraldi lisa.", 9, "#263334")
    text(pdf, MARGIN + 14, 79, "Splittija võib lisa salvestada eraldi PDF-failina.", 9, "#263334")
    text(pdf, MARGIN, 28, "FIKTIIVNE NÄIDIS - EI SISALDA PÄRISANDMEID", 8, "#a04d43", True)
    pdf.showPage()


def second_page(pdf):
    page_header(pdf, "LISA 1", 2)
    text(pdf, MARGIN, PAGE_HEIGHT - 112, "Tarneridade detailid", 16, "#172326", True)
    text(pdf, MARGIN, PAGE_HEIGHT - 132, "Seotud dokumendiga ND-2026-0142", 9, "#596667")

    rows = [
        ["1.1", "Arhiivikarp 330 × 260 × 75 mm", "6", "tk", "Ladu A"],
        ["1.2", "Arhiivikarp 400 × 300 × 100 mm", "6", "tk", "Ladu A"],
        ["2.1", "Dokumendikaust A4, valge", "12", "tk", "Ladu B"],
        ["2.2", "Dokumendikaust A4, hall", "12", "tk", "Ladu B"],
    ]
    draw_table(
        pdf,
        PAGE_HEIGHT - 174,
        rows,
        ["Rida", "Kirjeldus", "Kogus", "Ühik", "Asukoht"],
    )

    text(pdf, MARGIN, 430, "Vastuvõtu kinnitus", 11, "#172326", True)
    field(pdf, MARGIN, 396, "Vastuvõtja", "Mari Näidis", 210)
    field(pdf, 322, 396, "Kuupäev", "14.07.2026", 150)
    pdf.setStrokeColor(colors.HexColor("#9ca8a4"))
    pdf.line(MARGIN, 310, 260, 310)
    text(pdf, MARGIN, 296, "Allkiri", 8, "#6c7778")

    pdf.setFillColor(colors.HexColor("#f5f7f5"))
    pdf.roundRect(MARGIN, 102, PAGE_WIDTH - 2 * MARGIN, 76, 3, fill=1, stroke=0)
    text(pdf, MARGIN + 14, 155, "DOKUMENDIPIIR", 7, "#657172", True)
    text(pdf, MARGIN + 14, 136, "See lehekülg on eraldi lisa.", 10, "#263334", True)
    text(pdf, MARGIN + 14, 118, "OCR-i tekst ja dokumendi number seovad lisa põhifailiga.", 9, "#263334")
    text(pdf, MARGIN, 28, "FIKTIIVNE NÄIDIS - EI SISALDA PÄRISANDMEID", 8, "#a04d43", True)
    pdf.showPage()


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4)
    pdf.setTitle("Dokumenditöötluse anonüümne näidisdokument")
    pdf.setAuthor("Germo Eismann")
    first_page(pdf)
    second_page(pdf)
    pdf.save()
    print(OUTPUT)


if __name__ == "__main__":
    main()
