import os
import subprocess
import time

import os
import subprocess
import time

initial_route = os.getcwd()
routes = [
    "./typescript/",
    "./typescript/src/web/"
]

def print_with_delay(message, delay=1):
    print(f"\n{'*' * 10} {message} {'*' * 10}\n")
    time.sleep(delay)

for route in routes:
    try:
        os.chdir(route)
        print_with_delay(f"Swapping to {route}")
        print_with_delay(f"Installing dependencies in {route}")
        print_with_delay(f"Building in {route}")
        print_with_delay("Building...")
        subprocess.run(["npm", "i"], shell=True)
        os.chdir(initial_route)
        print_with_delay(f"Swapping to {initial_route}")
        print_with_delay(f"Done with {route}")
        
    except Exception as e:
        print(f"Error in {route}: {e}")
