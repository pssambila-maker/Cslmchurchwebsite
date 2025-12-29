import sys
import subprocess
import os

try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image

def remove_background(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    datas = img.load()
    width, height = img.size
    
    # Get background color from top-left pixel
    bg_color = datas[0, 0]
    # Allow for some tolerance in white color
    tolerance = 30
    
    # Flood fill algorithm
    queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    visited = set(queue)
    
    # Function to check if color is close to background
    def is_bg(color):
        return (abs(color[0] - bg_color[0]) <= tolerance and
                abs(color[1] - bg_color[1]) <= tolerance and
                abs(color[2] - bg_color[2]) <= tolerance)
    
    while queue:
        x, y = queue.pop(0)
        current_color = datas[x, y]
        
        if is_bg(current_color):
            datas[x, y] = (0, 0, 0, 0)  # Make transparent
            
            # Check neighbors
            for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    queue.append((nx, ny))

    img.save(output_path, "PNG")
    print(f"Saved processed image to {output_path}")

if __name__ == "__main__":
    input_file = r"d:\ChurchSite\FirstCSLM\cslm-website\public\images\church-logo.png"
    output_file = r"d:\ChurchSite\FirstCSLM\cslm-website\public\images\church-logo-transparent.png"
    remove_background(input_file, output_file)
