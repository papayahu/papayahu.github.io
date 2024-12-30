<script>
    /* 切换搜索栏的显示/隐藏状态 */
    function toggleSearch() {
        var searchContainer = document.getElementById('search-container');
        var searchIcon = document.querySelector('.search-icon');

        if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
            searchContainer.style.display = 'block';
            searchIcon.style.display = 'none'; // 隐藏搜索图标
        } else {
            searchContainer.style.display = 'none';
            searchIcon.style.display = 'block'; // 显示搜索图标
        }
    }

    /* 执行搜索后的操作 */
    function executeSearch() {
        // 在这里执行搜索操作，例如跳转到搜索结果页面或者使用 AJAX 加载搜索结果等

        // 搜索完成后，隐藏搜索栏，显示搜索图标
        var searchContainer = document.getElementById('search-container');
        var searchIcon = document.querySelector('.search-icon');
        searchContainer.style.display = 'none';
        searchIcon.style.display = 'block';
    }
</script>