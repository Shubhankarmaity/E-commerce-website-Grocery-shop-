import turmericImg from '../assets/turmeric.png';
import chiliImg from '../assets/chili.png';
import cardamomImg from '../assets/cardamom.png';

export const products = [
    {
        id: 1,
        name: 'Premium Turmeric Powder',
        price: 250,
        description: 'High-curcumin turmeric powder sourced from the finest farms in Meghalaya. Known for its vibrant color and potent health benefits.',
        image: turmericImg,
        category: 'Spices',
        weight: '200g',
    },
    {
        id: 2,
        name: 'Kashmiri Red Chili Powder',
        price: 320,
        description: 'Authentic Kashmiri chili powder that adds a rich red color to your dishes without overpowering heat. Mild and aromatic.',
        image: chiliImg,
        category: 'Spices',
        weight: '200g',
    },
    {
        id: 3,
        name: 'Green Cardamom Pods',
        price: 850,
        description: 'Hand-picked green cardamom pods from Kerala. Intense aroma and flavor, perfect for desserts and chai.',
        image: cardamomImg,
        category: 'Whole Spices',
        weight: '100g',
    },
    {
        id: 4,
        name: 'Organic Coriander Powder',
        price: 180,
        description: 'Freshly ground coriander powder with a citrusy, nutty flavor. Essential for Indian curries.',
        image: turmericImg, // Placeholder using turmeric for now if needed, or reuse
        category: 'Spices',
        weight: '200g',
    },
    {
        id: 5,
        name: 'Royal Cumin Seeds (Jeera)',
        price: 350,
        description: 'Aromatic cumin seeds with a distinct warm flavor. A staple in every Indian kitchen for tempering and seasoning.',
        image: turmericImg, // Placeholder
        category: 'Whole Spices',
        weight: '200g',
    },
    {
        id: 6,
        name: 'Black Pepper Corns',
        price: 550,
        description: 'Bold and pungent black pepper corns from the Malabar coast. Freshly harvested and sun-dried.',
        image: cardamomImg, // Placeholder
        category: 'Whole Spices',
        weight: '100g',
    },
    {
        id: 7,
        name: 'Cinnamon Sticks (Dalchini)',
        price: 420,
        description: 'Sweet and woody true cinnamon sticks. Adds a delightful fragrance to biryanis and desserts.',
        image: chiliImg, // Placeholder
        category: 'Whole Spices',
        weight: '100g',
    },
    {
        id: 8,
        name: 'Cloves (Laung)',
        price: 980,
        description: 'Premium quality cloves with a strong, sweet aroma. Essential for garam masala and chai blends.',
        image: cardamomImg, // Placeholder
        category: 'Whole Spices',
        weight: '50g',
    },
    {
        id: 9,
        name: 'Fenugreek Seeds (Methi)',
        price: 120,
        description: 'Bitter-sweet fenugreek seeds known for their health benefits. Perfect for pickles and curry powders.',
        image: turmericImg, // Placeholder
        category: 'Whole Spices',
        weight: '200g',
    },
    {
        id: 10,
        name: 'Mustard Seeds (Rai)',
        price: 90,
        description: 'Small, pungent black mustard seeds. The crackling sound of rai in hot oil is the start of many delicious dishes.',
        image: chiliImg, // Placeholder
        category: 'Whole Spices',
        weight: '200g',
    },
    // Pulses (Dals)
    {
        id: 11,
        name: 'Toor Dal (Arhar Dal)',
        price: 160,
        description: 'Premium unpolished Toor Dal. High in protein and essential for making delicious sambar and dal tadka.',
        image: turmericImg, // Placeholder
        category: 'Pulses',
        weight: '1kg',
    },
    {
        id: 12,
        name: 'Moong Dal (Yellow Split)',
        price: 140,
        description: 'Easy to digest and quick to cook. Perfect for khichdi and light soups.',
        image: chiliImg, // Placeholder
        category: 'Pulses',
        weight: '1kg',
    },
    {
        id: 13,
        name: 'Chana Dal',
        price: 110,
        description: 'Robust and nutty Chana Dal. Ideal for curries and snacks.',
        image: cardamomImg, // Placeholder
        category: 'Pulses',
        weight: '1kg',
    },
    {
        id: 14,
        name: 'Urad Dal (Whole White)',
        price: 180,
        description: 'Whole white Urad Dal, essential for making idli and dosa batter.',
        image: turmericImg, // Placeholder
        category: 'Pulses',
        weight: '1kg',
    },
    {
        id: 15,
        name: 'Masoor Dal (Red Split)',
        price: 130,
        description: 'Quick-cooking red lentils. Makes a creamy and nutritious dal.',
        image: chiliImg, // Placeholder
        category: 'Pulses',
        weight: '1kg',
    },

    // Rice & Flours
    {
        id: 16,
        name: 'Premium Basmati Rice',
        price: 180,
        description: 'Extra long grain Basmati rice. Aged to perfection for that authentic biryani aroma.',
        image: cardamomImg, // Placeholder
        category: 'Rice & Flours',
        weight: '1kg',
    },
    {
        id: 17,
        name: 'Sona Masoori Rice',
        price: 70,
        description: 'Lightweight and aromatic medium-grain rice. Perfect for daily consumption.',
        image: turmericImg, // Placeholder
        category: 'Rice & Flours',
        weight: '1kg',
    },
    {
        id: 18,
        name: 'Chakki Fresh Atta',
        price: 55,
        description: '100% whole wheat flour ground in traditional chakki. Makes soft and fluffy rotis.',
        image: chiliImg, // Placeholder
        category: 'Rice & Flours',
        weight: '1kg',
    },
    {
        id: 19,
        name: 'Maida (Refined Flour)',
        price: 60,
        description: 'Fine quality refined flour for baking cakes, pastries, and making naans.',
        image: cardamomImg, // Placeholder
        category: 'Rice & Flours',
        weight: '1kg',
    },
    {
        id: 20,
        name: 'Besan (Gram Flour)',
        price: 90,
        description: 'Fine gram flour made from pure chana dal. Essential for pakoras and sweets.',
        image: turmericImg, // Placeholder
        category: 'Rice & Flours',
        weight: '1kg',
    },

    // Oils & Ghee
    {
        id: 21,
        name: 'Pure Mustard Oil (Kachi Ghani)',
        price: 190,
        description: 'Cold-pressed mustard oil with a strong pungency. Heart-healthy and authentic.',
        image: chiliImg, // Placeholder
        category: 'Oils & Ghee',
        weight: '1L',
    },
    {
        id: 22,
        name: 'Refined Sunflower Oil',
        price: 160,
        description: 'Light and healthy sunflower oil. Enriched with vitamins.',
        image: cardamomImg, // Placeholder
        category: 'Oils & Ghee',
        weight: '1L',
    },
    {
        id: 23,
        name: 'Pure Cow Ghee',
        price: 650,
        description: 'Traditional granular cow ghee with a divine aroma. Adds richness to any meal.',
        image: turmericImg, // Placeholder
        category: 'Oils & Ghee',
        weight: '500ml',
    },

    // Dry Fruits & Nuts
    {
        id: 24,
        name: 'Premium Almonds (Badam)',
        price: 950,
        description: 'Crunchy and nutritious almonds. High in protein and healthy fats.',
        image: chiliImg, // Placeholder
        category: 'Dry Fruits',
        weight: '500g',
    },
    {
        id: 25,
        name: 'Whole Cashews (Kaju)',
        price: 850,
        description: 'Creamy and sweet whole cashews. Perfect for snacking or rich gravies.',
        image: cardamomImg, // Placeholder
        category: 'Dry Fruits',
        weight: '500g',
    },
    {
        id: 26,
        name: 'Golden Raisins (Kishmish)',
        price: 400,
        description: 'Sweet and plump golden raisins. Great for desserts and baking.',
        image: turmericImg, // Placeholder
        category: 'Dry Fruits',
        weight: '500g',
    },
    {
        id: 27,
        name: 'Walnut Kernels (Akhrot)',
        price: 1200,
        description: 'Fresh and crunchy walnut kernels. Brain food packed with Omega-3.',
        image: chiliImg, // Placeholder
        category: 'Dry Fruits',
        weight: '500g',
    },
    {
        id: 28,
        name: 'Roasted Pistachios (Pista)',
        price: 1100,
        description: 'Lightly salted roasted pistachios. An addictive healthy snack.',
        image: cardamomImg, // Placeholder
        category: 'Dry Fruits',
        weight: '500g',
    },

    // Salt & Sugar
    {
        id: 29,
        name: 'Iodized Crystal Salt',
        price: 25,
        description: 'Pure crystal salt fortified with iodine. Essential for daily cooking.',
        image: turmericImg, // Placeholder
        category: 'Salt & Sugar',
        weight: '1kg',
    },
    {
        id: 30,
        name: 'Premium Sugar',
        price: 50,
        description: 'Sulphur-free white sugar crystals. Sweeten your life naturally.',
        image: chiliImg, // Placeholder
        category: 'Salt & Sugar',
        weight: '1kg',
    },
    {
        id: 31,
        name: 'Organic Jaggery (Gud)',
        price: 80,
        description: 'Chemical-free organic jaggery blocks. A healthy alternative to sugar.',
        image: cardamomImg, // Placeholder
        category: 'Salt & Sugar',
        weight: '1kg',
    },
];
