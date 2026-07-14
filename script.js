/* ============ RESET & BASE ============ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    min-height: 100vh;
    color: #fff;
    padding: 20px;
}

/* ============ SECTIONS ============ */
.section-container {
    max-width: 900px;
    margin: 0 auto;
    animation: fadeInUp 0.5s ease;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hidden {
    display: none !important;
}

/* ============ HEADER BAR ============ */
.header-bar {
    text-align: center;
    margin-bottom: 30px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.header-bar i {
    font-size: 3rem;
    color: #00d2ff;
    margin-bottom: 10px;
}

.header-bar h1 {
    font-size: 2rem;
    background: linear-gradient(90deg, #00d2ff, #3a7bd5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
}

.header-bar p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
}

/* ============ UPLOAD AREA ============ */
.upload-area {
    border: 3px dashed rgba(0, 210, 255, 0.4);
    border-radius: 20px;
    padding: 50px 30px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.03);
    margin-bottom: 20px;
}

.upload-area:hover,
.upload-area.drag-over {
    border-color: #00d2ff;
    background: rgba(0, 210, 255, 0.05);
    transform: translateY(-2px);
}

.upload-icon {
    font-size: 4rem;
    color: #00d2ff;
    margin-bottom: 15px;
}

.upload-area h3 {
    font-size: 1.3rem;
    margin-bottom: 5px;
}

.upload-area p {
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 20px;
}

.btn-upload {
    background: linear-gradient(135deg, #00d2ff, #3a7bd5);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 50px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
}

.btn-upload:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 25px rgba(0, 210, 255, 0.4);
}

.supported-formats {
    margin-top: 15px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
}

/* ============ IMAGE PREVIEW ============ */
#preview-container {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

#preview-container h3 {
    margin-bottom: 15px;
    color: #00d2ff;
}

.preview-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: center;
}

#imagePreview {
    max-width: 100%;
    max-height: 400px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.btn-remove {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff4757;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.btn-remove:hover {
    background: #ff3344;
    transform: scale(1.05);
}

/* ============ TEMPLATE SELECTION ============ */
#template-selection {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

#template-selection h3 {
    margin-bottom: 15px;
    color: #00d2ff;
}

.template-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}

@media (max-width: 600px) {
    .template-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.template-card {
    background: rgba(255, 255, 255, 0.08);
    border: 2px solid transparent;
    border-radius: 12px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.template-card:hover {
    border-color: rgba(0, 210, 255, 0.5);
    transform: translateY(-3px);
}

.template-card.active {
    border-color: #00d2ff;
    background: rgba(0, 210, 255, 0.1);
    box-shadow: 0 5px 20px rgba(0, 210, 255, 0.2);
}

.template-card span {
    display: block;
    margin-top: 10px;
    font-weight: 600;
    font-size: 0.85rem;
}

/* Template Previews (Miniatures) */
.template-preview {
    height: 80px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.05);
    overflow: hidden;
    display: flex;
    padding: 6px;
    gap: 4px;
}

.modern-preview .tp-sidebar {
    width: 30%;
    background: rgba(0, 210, 255, 0.3);
    border-radius: 3px;
}

.modern-preview .tp-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    padding: 4px;
}

.classic-preview {
    flex-direction: column;
}

.classic-preview .tp-header-block {
    height: 25px;
    background: rgba(0, 210, 255, 0.3);
    border-radius: 3px;
    margin-bottom: 4px;
}

.classic-preview .tp-body {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 2px;
}

.creative-preview {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.creative-preview .tp-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(0, 210, 255, 0.3);
}

.creative-preview .tp-two-col {
    display: flex;
    gap: 4px;
    width: 100%;
}

.creative-preview .tp-col {
    flex: 1;
}

.minimal-preview {
    flex-direction: column;
    align-items: center;
    gap: 4px;
    justify-content: center;
}

.minimal-preview .tp-divider {
    width: 60%;
    height: 1px;
    background: rgba(0, 210, 255, 0.5);
}

.tp-line {
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
}

.tp-line.w80 { width: 80%; }
.tp-line.w60 { width: 60%; }
.tp-line.w90 { width: 90%; }
.tp-line.w40 { width: 40%; }
.tp-line.center { align-self: center; }

/* ============ BUTTONS ============ */
#process-section {
    text-align: center;
    margin: 20px 0;
}

.btn-generate {
    background: linear-gradient(135deg, #00d2ff, #3a7bd5);
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 50px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.btn-generate:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 210, 255, 0.4);
}

.btn-generate:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}

/* ============ PROGRESS BAR ============ */
.progress-container {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 15px;
}

.progress-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #00d2ff, #3a7bd5);
    border-radius: 10px;
    transition: width 0.3s ease;
}

.progress-text {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    margin-bottom: 5px;
}

.progress-percentage {
    color: #00d2ff;
    font-size: 1.5rem;
    font-weight: 700;
}

/* ============ EDIT FORM ============ */
.edit-form {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-group {
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.form-group:last-of-type {
    border-bottom: none;
}

.form-group h3 {
    color: #00d2ff;
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.form-group h3 i {
    margin-right: 8px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 10px;
}

@media (max-width: 600px) {
    .form-row {
        grid-template-columns: 1fr;
    }
}

.form-field {
    margin-bottom: 10px;
}

.form-field.full-width {
    grid-column: 1 / -1;
}

.form-field label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
}

.form-field input,
.form-field textarea {
    width: 100%;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    color: white;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    font-family: inherit;
}

.form-field input:focus,
.form-field textarea:focus {
    outline: none;
    border-color: #00d2ff;
    background: rgba(0, 210, 255, 0.05);
    box-shadow: 0 0 15px rgba(0, 210, 255, 0.1);
}

.form-field input::placeholder,
.form-field textarea::placeholder {
    color: rgba(255, 255, 255, 0.3);
}

/* Dynamic entries (experience, education) */
.dynamic-entry {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    position: relative;
}

.dynamic-entry .btn-remove-entry {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 71, 87, 0.2);
    color: #ff4757;
    border: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.dynamic-entry .btn-remove-entry:hover {
    background: #ff4757;
    color: white;
}

.btn-add {
    background: rgba(0, 210, 255, 0.1);
    color: #00d2ff;
    border: 1px dashed rgba(0, 210, 255, 0.4);
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    width: 100%;
}

.btn-add:hover {
    background: rgba(0, 210, 255, 0.2);
    border-color: #00d2ff;
}

.form-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
}

.btn-back {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 12px 30px;
    border-radius: 50px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
}

.btn-back:hover {
    background: rgba(255, 255, 255, 0.2);
}

/* ============ OUTPUT SECTION ============ */
.output-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 25px;
}

.btn-action {
    background: linear-gradient(135deg, #00d2ff, #3a7bd5);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
}

.btn-action:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 210, 255, 0.3);
}

.btn-action.secondary {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-action.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: none;
}

/* Code Display */
.code-container {
    background: #1a1a2e;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-header span {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
}

.code-header button {
    background: rgba(0, 210, 255, 0.2);
    color: #00d2ff;
    border: none;
    padding: 5px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.code-header button:hover {
    background: rgba(0, 210, 255, 0.4);
}

.code-container pre {
    padding: 20px;
    overflow-x: auto;
    max-height: 400px;
}

.code-container code {
    font-family: 'Fira Code', 'Consolas', monospace;
    font-size: 0.8rem;
    color: #a8d8ea;
    white-space: pre;
    line-height: 1.5;
}

/* Preview Frame */
.preview-frame-container {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.preview-frame-container h3 {
    color: #00d2ff;
    margin-bottom: 15px;
}

.preview-frame {
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 10px;
    background: white;
}

/* ============ TOAST ============ */
.toast {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #00d2ff, #3a7bd5);
    color: white;
    padding: 15px 25px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        transform: translateX(100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* ============ SCROLLBAR ============ */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
    background: rgba(0, 210, 255, 0.3);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 210, 255, 0.5);
}
