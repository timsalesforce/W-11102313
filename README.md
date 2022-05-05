# To repro
- Push code to scratch/dev org
- Place the lwc on any page
- Notice the error pops up immediately in LAB
- If you save it and return to the page, the error does not pop up, but it is happening still, and the component does not render

# To fix
- Give svg a default value in the JS file.