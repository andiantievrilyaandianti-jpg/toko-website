// Data Menu Kue
const menuItems = [
    // Kue Modern
    {
        id: 1,
        name: 'Cake Lapis Susu Modern',
        type: 'modern',
        description: 'Kue dengan tekstur lembut dan rasa creamy yang sempurna.',
        price: 'Rp 85.000',
        icon: '🎂'
    },
    {
        id: 2,
        name: 'Cheesecake Premium',
        type: 'modern',
        description: 'Kue keju New York style yang lezat dan mewah.',
        price: 'Rp 120.000',
        icon: '🧁'
    },
    {
        id: 3,
        name: 'Red Velvet Cake',
        type: 'modern',
        description: 'Kue merah yang elegan dengan cream cheese frosting.',
        price: 'Rp 95.000',
        icon: '🎂'
    },
    {
        id: 4,
        name: 'Tiramisu Cake',
        type: 'modern',
        description: 'Kue Italia dengan rasa kopi yang kaya.',
        price: 'Rp 110.000',
        icon: '🧁'
    },
    {
        id: 5,
        name: 'Matcha Green Tea Cake',
        type: 'modern',
        description: 'Kue matcha premium dengan rasa yang lembut.',
        price: 'Rp 115.000',
        icon: '🎂'
    },
    {
        id: 6,
        name: 'Black Forest Cake',
        type: 'modern',
        description: 'Kue klasik dengan cokelat dan ceri segar.',
        price: 'Rp 130.000',
        icon: '🧁'
    },
    // Kue Tradisional
    {
        id: 7,
        name: 'Kue Lapis Legit',
        type: 'tradisional',
        description: 'Kue klasik Indonesia dengan banyak lapisan dan rasa yang kaya.',
        price: 'Rp 75.000',
        icon: '🍰'
    },
    {
        id: 8,
        name: 'Kue Basah Nanas',
        type: 'tradisional',
        description: 'Kue tradisional dengan potongan nanas segar di atasnya.',
        price: 'Rp 65.000',
        icon: '🍰'
    },
    {
        id: 9,
        name: 'Kue Tart Buah',
        type: 'tradisional',
        description: 'Kue dengan berbagai buah segar pilihan.',
        price: 'Rp 80.000',
        icon: '🎂'
    },
    {
        id: 10,
        name: 'Kue Gabin',
        type: 'tradisional',
        description: 'Kue tradisional Bandung yang gurih dan lezat.',
        price: 'Rp 60.000',
        icon: '🍰'
    },
    {
        id: 11,
        name: 'Kue Ulat (Terang Bulan)',
        type: 'tradisional',
        description: 'Kue tradisional dengan berbagai varian isi yang lezat.',
        price: 'Rp 45.000',
        icon: '🧁'
    },
    {
        id: 12,
        name: 'Bolu Gulung',
        type: 'tradisional',
        description: 'Kue gulung yang empuk dengan rasa vanila klasik.',
        price: 'Rp 55.000',
        icon: '🍰'
    }
];

// Render Menu
function renderMenu(filter = 'semua') {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    const filteredItems = filter === 'semua' 
        ? menuItems 
        : menuItems.filter(item => item.type === filter);

    filteredItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.style.animationDelay = `${index * 0.1}s`;
        
        const typeLabel = item.type === 'modern' ? 'Kue Modern' : 'Kue Tradisional';
        const typeClass = item.type === 'modern' ? '' : 'tradisional';
        
        menuItem.innerHTML = `
            <div class="menu-image">${item.icon}</div>
            <div class="menu-content">
                <span class="menu-type ${typeClass}">${typeLabel}</span>
                <h3 class="menu-name">${item.name}</h3>
                <p class="menu-description">${item.description}</p>
                <p class="menu-price">${item.price}</p>
            </div>
        `;
        
        menuItem.addEventListener('click', () => {
            alert(`Anda tertarik dengan ${item.name}?

Hubungi kami untuk pemesanan!

Telepon: (021) 1234-5678
WhatsApp: 0812-3456-7890`);
        });
        
        menuGrid.appendChild(menuItem);
    });
}

// Filter Menu
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Render filtered menu
        const filter = button.getAttribute('data-filter');
        renderMenu(filter);
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
    navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.style.display = 'none';
    });
});

// Form Submission
document.querySelector('.kontak-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const pesan = document.getElementById('pesan').value;
    
    if(nama && email && telepon && pesan) {
        alert(`Terima kasih ${nama}!

Pesan Anda telah kami terima. Kami akan menghubungi Anda segera di ${telepon}.

Besok juga kami confirm pesanan Anda via WhatsApp.`);
        document.querySelector('.kontak-form').reset();
    } else {
        alert('Mohon isi semua field dengan lengkap!');
    }
});

// Initial render
renderMenu();
