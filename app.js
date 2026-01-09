// App Logic

document.addEventListener('DOMContentLoaded', () => {
    renderHome();
    initParticles();
});

function renderHome() {
    const main = document.getElementById('main-content');

    // Group topics by category
    const categories = {};
    SYLLABUS_TOPICS.forEach(topic => {
        if (!categories[topic.category]) categories[topic.category] = [];
        categories[topic.category].push(topic);
    });

    let topicsHtml = '';
    for (const [cat, topics] of Object.entries(categories)) {
        topicsHtml += `<h3 class="section-title" style="margin-top: 3rem; font-size: 1.8rem; text-align: left; padding-left: 2rem; color: #a0a0a0;">${cat}</h3>`;
        topicsHtml += `<div class="timeline-grid">`;
        topics.forEach(topic => {
            topicsHtml += `
                <div class="topic-card" onclick="openTopic('${topic.id}')" style="--accent: ${topic.color}">
                    <div>
                        <div class="topic-category" style="color: ${topic.color}">${topic.category}</div>
                        <h3 class="topic-title">${topic.title}</h3>
                        <p class="topic-desc">${topic.description}</p>
                    </div>
                </div>
            `;
        });
        topicsHtml += `</div>`;
    }

    main.innerHTML = `
        <section class="hero">
            <h1>Physics is Fun</h1>
            <p>Master your Applied Physics syllabus with interactive visualizations, derived theories, and practice numericals.</p>
            <button class="btn-start" onclick="scrollToTopics()">Start Learning</button>
        </section>

        <section id="topics" class="topics-section">
            <h2 class="section-title">Syllabus Topics</h2>
            ${topicsHtml}
        </section>
    `;
}

function scrollToTopics() {
    document.getElementById('topics').scrollIntoView({ behavior: 'smooth' });
}

function openTopic(id) {
    const topic = SYLLABUS_TOPICS.find(t => t.id === id);
    if (!topic) return;

    const modal = document.getElementById('topic-modal');
    const modalBody = document.getElementById('modal-body');

    // 1. Generate Numericals HTML
    const numericalsHtml = topic.content.numericals.length > 0 ?
        topic.content.numericals.map((n, i) => `
            <div class="numerical-card">
                <div class="numerical-q">Q${i + 1}: ${n.q}</div>
                <div class="numerical-a">Ans: ${n.a}</div>
            </div>
        `).join('') : '<p style="color: grey;">More numericals coming soon...</p>';

    // 2. Generate Questions HTML
    const questionsHtml = topic.content.questions.length > 0 ?
        `<ul style="list-style-position: inside; color: #ccc; line-height: 1.6;">${topic.content.questions.map(q => `<li>${q}</li>`).join('')}</ul>`
        : '';

    // 3. Generate Derivation HTML
    const derivationHtml = topic.content.derivation ?
        `<div class="content-block">
            <h3>Derivation</h3>
            <div class="theory-text">${topic.content.derivation}</div>
        </div>` : '';

    // 4. Generate Simulation HTML
    const hasSimulation = ['solenoid', 'toroid', 'current'].includes(topic.id);
    const simulationHtml = hasSimulation ? `
        <div class="content-block">
            <h3>Interactive Simulation</h3>
            <div class="canvas-container">
                <canvas id="topic-simulation"></canvas>
                <div class="controls">
                    <label>Current (I): <input type="range" min="1" max="10" value="2" id="sim-current"></label>
                    <span id="current-val">2A</span>
                </div>
            </div>
            <p class="sim-note">Adjust the slider to see how Magnetic Field changes!</p>
        </div>
    ` : '';

    // 5. Generate MCQs HTML
    const mcqsHtml = topic.content.mcqs && topic.content.mcqs.length > 0 ? `
        <div class="content-block">
            <h3>Quick Quiz (MCQs)</h3>
            <div class="mcq-container">
                ${topic.content.mcqs.map((mcq, index) => `
                    <div class="mcq-item">
                        <p class="mcq-question">${index + 1}. ${mcq.q}</p>
                        <div class="mcq-options">
                            ${mcq.options.map((opt, optIndex) => `
                                <button class="btn-mcq" onclick="checkMcq(this, ${optIndex}, ${mcq.correct})">${opt}</button>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    // 6. Assemble Modal Content
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 style="color: ${topic.color}">${topic.title}</h2>
            <p style="color: #ccc; margin-bottom: 2rem;">${topic.description}</p>
        </div>

        ${topic.content.essentialNeeds ? `
        <div class="content-block essential-box">
            <h3>⚡ Essential Needs of Learning</h3>
            <p style="color: #ddd;">${topic.content.essentialNeeds}</p>
        </div>` : ''}

        ${simulationHtml}
        
        ${topic.content.diagram ? `
        <div class="content-block" style="text-align:center; margin: 2rem 0;">
            ${topic.content.diagram}
            <p style="font-size:0.8rem; color:#aaa; margin-top:0.5rem;">Topic Diagram</p>
        </div>` : ''}

        <div class="content-block">
            <h3>Theory</h3>
            <div class="theory-text">${topic.content.theory}</div>
        </div>

        ${derivationHtml}

        <div class="content-block">
            <h3>Practice Numericals</h3>
            ${numericalsHtml}
        </div>

        ${questionsHtml ? `
        <div class="content-block">
            <h3>Key Questions</h3>
            ${questionsHtml}
        </div>` : ''}

        ${mcqsHtml}
    `;

    modal.classList.add('active');

    if (hasSimulation) {
        startSimulation(topic.id);
    }
}

// Global function for MCQ checking
window.checkMcq = function (btn, selected, correct) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('.btn-mcq');

    // Disable all buttons in this group
    buttons.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.style.background = '#4CAF50';
        btn.style.color = 'white';
        btn.textContent += ' ✓';
    } else {
        btn.style.background = '#F44336';
        btn.style.color = 'white';
        buttons[correct].style.background = '#4CAF50';
        buttons[correct].style.color = 'white';
    }
};

// Modal closing logic
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('topic-modal').classList.remove('active');
    stopSimulation();
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('topic-modal');
    if (e.target === modal) {
        modal.classList.remove('active');
        stopSimulation();
    }
});


// --- SIMULATION LOGIC ---
let simRequestId;
let simCtx;
let simCanvas;

function startSimulation(type) {
    simCanvas = document.getElementById('topic-simulation');
    const container = simCanvas.parentElement;
    simCanvas.width = container.clientWidth;
    simCanvas.height = 300;
    simCtx = simCanvas.getContext('2d');

    const slider = document.getElementById('sim-current');
    const display = document.getElementById('current-val');

    let currentVal = 2;
    slider.addEventListener('input', (e) => {
        currentVal = parseInt(e.target.value);
        display.textContent = currentVal + 'A';
    });

    function loop() {
        simCtx.clearRect(0, 0, simCanvas.width, simCanvas.height);

        if (type === 'solenoid') drawSolenoid(simCtx, currentVal, simCanvas.width, simCanvas.height);
        if (type === 'toroid') drawToroid(simCtx, currentVal, simCanvas.width, simCanvas.height);
        if (type === 'current') drawCurrent(simCtx, currentVal, simCanvas.width, simCanvas.height);

        simRequestId = requestAnimationFrame(loop);
    }
    loop();
}

function stopSimulation() {
    if (simRequestId) cancelAnimationFrame(simRequestId);
}

function drawSolenoid(ctx, current, w, h) {
    const turns = 10;
    const padding = 20;
    const coilW = w - 100;
    const coilSpacing = coilW / turns;
    const startX = 50;
    const centerY = h / 2;
    const radius = 40;

    // Draw Magnetic Field Lines inside
    ctx.beginPath();
    // Color intensity based on current
    const alpha = Math.min(0.2 + (current / 20), 1);
    ctx.strokeStyle = `rgba(76, 201, 240, ${alpha})`;
    ctx.lineWidth = 2;

    // Draw parallel lines inside
    for (let i = 0; i < 5; i++) {
        const y = centerY - radius + 10 + (i * (radius * 2 - 20) / 4);
        ctx.moveTo(startX - 20, y);
        ctx.lineTo(startX + coilW + 20, y);
    }
    ctx.stroke();

    // Draw Coil
    ctx.beginPath();
    ctx.strokeStyle = '#F72585';
    ctx.lineWidth = 4;
    for (let i = 0; i < turns; i++) {
        const x = startX + i * coilSpacing;
        // Upper loop
        ctx.moveTo(x, centerY - radius);
        ctx.quadraticCurveTo(x + coilSpacing / 2, centerY - radius - 20, x + coilSpacing, centerY - radius);
        // Vertical front
        ctx.lineTo(x + coilSpacing, centerY + radius);
        // Lower loop (behind)
        // ctx.moveTo(x + coilSpacing, centerY + radius); 
        // ctx.quadraticCurveTo(x + coilSpacing/2, centerY + radius + 20, x, centerY + radius);
    }
    ctx.stroke();

    // Arrows for field
    ctx.fillStyle = "#4CC9F0";
    ctx.font = "16px monospace";
    ctx.fillText("B-Field →", w / 2 - 40, centerY);
    ctx.fillText(`B ∝ I(${current}A)`, w / 2 - 40, centerY + 20);
}

function drawToroid(ctx, current, w, h) {
    const cx = w / 2;
    const cy = h / 2;
    const r1 = 60; // Inner
    const r2 = 100; // Outer

    // Draw Core
    ctx.beginPath();
    ctx.arc(cx, cy, r1, 0, Math.PI * 2);
    ctx.arc(cx, cy, r2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fill("evenodd");
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.stroke();

    // Draw Windings
    const turns = 30;
    ctx.beginPath();
    ctx.strokeStyle = "#F72585";
    ctx.lineWidth = 2;
    for (let i = 0; i < turns; i++) {
        const angle = (i / turns) * Math.PI * 2;
        const x_in = cx + Math.cos(angle) * r1;
        const y_in = cy + Math.sin(angle) * r1;
        const x_out = cx + Math.cos(angle) * r2;
        const y_out = cy + Math.sin(angle) * r2;
        ctx.moveTo(x_in, y_in);
        ctx.lineTo(x_out, y_out);
    }
    ctx.stroke();

    // Field Lines inside
    const fieldAlpha = Math.min(0.2 + (current / 20), 1);
    ctx.beginPath();
    ctx.strokeStyle = `rgba(76, 201, 240, ${fieldAlpha})`;
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.arc(cx, cy, (r1 + r2) / 2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Rotating particles indicating field direction
    const time = Date.now() / 1000;
    const speed = current * 0.5;
    const px = cx + Math.cos(time * speed) * ((r1 + r2) / 2);
    const py = cy + Math.sin(time * speed) * ((r1 + r2) / 2);

    ctx.beginPath();
    ctx.fillStyle = "#4CC9F0";
    ctx.arc(px, py, 5, 0, Math.PI * 2);
    ctx.fill();
}

function drawCurrent(ctx, current, w, h) {
    const cy = h / 2;
    // Draw Wire
    ctx.fillStyle = "#333";
    ctx.fillRect(0, cy - 30, w, 60);

    // Draw Electrons
    const electronCount = 20;
    const speed = current; // Speed depends on current
    const time = Date.now() / 100;

    ctx.fillStyle = "#4CC9F0";
    for (let i = 0; i < electronCount; i++) {
        let x = (i * (w / electronCount) + (time * speed)) % w;
        let y = cy + Math.sin(x / 50 + i) * 10;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.fillStyle = "white";
    ctx.fillText("Electron Flow ->", 20, cy - 40);
}

// Particle Animation for Background
function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');

    let particles = [];
    const particleCount = 50;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.color = `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, 0.5)`;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connections
        ctx.strokeStyle = 'rgba(76, 201, 240, 0.05)';
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}
