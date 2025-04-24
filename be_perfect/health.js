function showBenefits(name) {
    let benefits;
  
    // Define the health benefits for each vegetable/fruit
    switch(name) {
      case 'Carrot':
        benefits = "Carrots are rich in beta-carotene and fiber. Benefits: Boosts immunity, reduces risk of heart disease, and helps prevent cancer.";
        break;
      case 'Spinach':
        benefits = "Spinach is high in antioxidants, vitamins, and minerals. Benefits: Helps manage blood pressure, prevents cataracts, and supports bone health.";
        break;
      case 'Broccoli':
        benefits = "Broccoli is packed with vitamins C, K, and fiber. Benefits: Reduces the risk of heart disease and cancer, and supports immune health.";
        break;
      case 'Blueberry':
        benefits = "Blueberries are high in antioxidants. Benefits: Protects against heart disease, reduces inflammation, and supports cognitive health.";
        break;
      case 'Apple':
        benefits = "Apples are rich in fiber and vitamin C. Benefits: Helps control blood sugar levels, reduces risk of diabetes, and promotes heart health.";
        break;
      default:
        benefits = "Click on a vegetable or fruit to see its health benefits!";
    }
  
    // Display the benefits on the page
    document.getElementById('health-benefits').textContent = benefits;
  }
  