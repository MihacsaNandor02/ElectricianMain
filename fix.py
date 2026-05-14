import os

replacements = {
    "Äƒ": "ă",
    "Ä‚": "Ă",
    "Ã¢": "â",
    "Ã‚": "Â",
    "Ã®": "î",
    "ÃŽ": "Î",
    "È™": "ș",
    "È˜": "Ș",
    "È›": "ț",
    "Èš": "Ț",
    "ÅŸ": "ș",
    "Å£": "ț",
    "â€œ": '"',
    "â€": '"',
    "â€“": "–",
    "â€™": "'",
    "Å£": "ț"
}

def fix_files_in_dir(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    new_content = content
                    for bad, good in replacements.items():
                        new_content = new_content.replace(bad, good)
                    
                    if content != new_content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Fixed {file_path}")
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    fix_files_in_dir("e:/Projektek/Electrician-Main_site/src")
