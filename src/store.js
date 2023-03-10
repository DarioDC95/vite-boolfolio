import { reactive } from 'vue'

export const store = reactive({
    url_project: 'http://127.0.0.1:8000',
    loading: true,
    projects: null,
    current_page: 1,
    last_page: null,
})