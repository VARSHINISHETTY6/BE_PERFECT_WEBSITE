function showRecipe(name) {
    let recipe;
  
    // Define the recipes for each box
    switch(name) {
      case 'ABC Juice':
        recipe = "ABC Juice Recipe: 1 Apple, 1 Beetroot, 2 Carrots. Blend with water!";
        break;
      case 'Carrot Face Mask':
        recipe = "Carrot Face Mask Recipe: Grate 1 carrot, mix with honey and apply to face for 15 minutes!";
        break;
      case 'Cucumber Face Mask':
        recipe = "Cucumber Face Mask Recipe: Grate half cucumber, mix with yogurt, apply for 10 minutes!";
        break;
      case 'Aloe Vera Juice':
        recipe = "Aloe Vera Juice Recipe: Extract juice from aloe vera, mix with water, and drink!";
        break;
      case 'Mint Face Mask':
        recipe = "Mint Face Mask Recipe: Crush fresh mint leaves, mix with honey and apply for 15 minutes!";
        break;
      default:
        recipe = "Click on a box to see the recipe!";
    }
  
    // Display the recipe on the page
    document.getElementById('recipe-display').textContent = recipe;
  }
  