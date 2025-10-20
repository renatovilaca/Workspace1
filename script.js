// Task Management Application
class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.loadFromLocalStorage();
        this.setupEventListeners();
        this.render();
        this.loadNotes();
    }

    setupEventListeners() {
        // Add task button
        document.getElementById('addTaskBtn').addEventListener('click', () => this.addTask());
        
        // Add task on Enter key
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Clear completed tasks
        document.getElementById('clearCompleted').addEventListener('click', () => {
            this.clearCompleted();
        });

        // Save notes
        document.getElementById('saveNotes').addEventListener('click', () => {
            this.saveNotes();
        });
    }

    addTask() {
        const input = document.getElementById('taskInput');
        const taskText = input.value.trim();

        if (taskText === '') {
            alert('Por favor, digite uma tarefa!');
            return;
        }

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.push(task);
        input.value = '';
        input.focus();
        
        this.saveToLocalStorage();
        this.render();
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveToLocalStorage();
            this.render();
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.saveToLocalStorage();
        this.render();
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });

        this.render();
    }

    clearCompleted() {
        const completedCount = this.tasks.filter(t => t.completed).length;
        
        if (completedCount === 0) {
            alert('Não há tarefas concluídas para limpar!');
            return;
        }

        if (confirm(`Deseja remover ${completedCount} tarefa(s) concluída(s)?`)) {
            this.tasks = this.tasks.filter(t => !t.completed);
            this.saveToLocalStorage();
            this.render();
        }
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(t => !t.completed);
            case 'completed':
                return this.tasks.filter(t => t.completed);
            default:
                return this.tasks;
        }
    }

    render() {
        const taskList = document.getElementById('taskList');
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<div class="empty-state">Nenhuma tarefa encontrada</div>';
        } else {
            taskList.innerHTML = filteredTasks.map(task => `
                <li class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                    <input 
                        type="checkbox" 
                        class="task-checkbox" 
                        ${task.completed ? 'checked' : ''}
                        onchange="taskManager.toggleTask(${task.id})"
                    />
                    <span class="task-text">${this.escapeHtml(task.text)}</span>
                    <button class="task-delete" onclick="taskManager.deleteTask(${task.id})">
                        Excluir
                    </button>
                </li>
            `).join('');
        }

        this.updateStats();
    }

    updateStats() {
        const totalTasks = this.tasks.length;
        const activeTasks = this.tasks.filter(t => !t.completed).length;
        const taskCount = document.getElementById('taskCount');
        
        if (totalTasks === 0) {
            taskCount.textContent = '0 tarefas';
        } else if (totalTasks === 1) {
            taskCount.textContent = `1 tarefa (${activeTasks} ativa)`;
        } else {
            taskCount.textContent = `${totalTasks} tarefas (${activeTasks} ativas)`;
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    loadFromLocalStorage() {
        const saved = localStorage.getItem('tasks');
        if (saved) {
            try {
                this.tasks = JSON.parse(saved);
            } catch (e) {
                console.error('Error loading tasks:', e);
                this.tasks = [];
            }
        }
    }

    saveNotes() {
        const notes = document.getElementById('notes').value;
        localStorage.setItem('notes', notes);
        
        // Visual feedback
        const btn = document.getElementById('saveNotes');
        const originalText = btn.textContent;
        btn.textContent = '✓ Salvo!';
        btn.style.background = 'var(--success-color)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }

    loadNotes() {
        const notes = localStorage.getItem('notes');
        if (notes) {
            document.getElementById('notes').value = notes;
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the application
const taskManager = new TaskManager();

// Add welcome message on first load
if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'true');
    setTimeout(() => {
        alert('Bem-vindo ao IA Workspace! 🤖\n\nCrie suas tarefas e organize seu dia de forma eficiente!');
    }, 500);
}
