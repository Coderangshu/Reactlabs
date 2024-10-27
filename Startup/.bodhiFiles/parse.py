def show_test_suites(file_path):
    try:
        with open(file_path, 'r') as file:
            lines = file.readlines()

        # Find the line with "Test Suites" and print it along with the next 3 lines
        for i, line in enumerate(lines):
            if "Test Suites" in line:
                # Print the current line and the next three lines if they exist
                for j in range(4):
                    if i + j < len(lines):  # Check to avoid index out of range
                        print(lines[i + j].strip())
                break  # Exit after printing

    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    show_test_suites('/home/.evaluationScripts/.bodhiFiles/out.txt')
