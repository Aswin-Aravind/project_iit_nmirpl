import sys
import PyPDF2

def read_pdf(file_path):
    try:
        with open(file_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            for page_num in range(len(reader.pages)):
                text += reader.pages[page_num].extract_text() + "\n"
            
            with open("extracted_text.txt", "w", encoding="utf-8") as out:
                out.write(text)
            print("Successfully wrote PDF text to extracted_text.txt")
    except Exception as e:
        print(f"Error reading PDF: {e}")

if __name__ == "__main__":
    read_pdf("Lab webpage.pdf")
