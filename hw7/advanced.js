class PaginationUtil {
    constructor(value, elemsOnPage) {
        this.value = value;
        this.elemsOnPage = elemsOnPage;
    }

    pageCount() {
        return Math.ceil(this.value.length / this.elemsOnPage);
    }

    itemCount() {
        return this.value.length;
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        }
        if (pageIndex === this.pageCount() - 1) {
            return this.value.length % this.elemsOnPage;
        }
        return this.elemsOnPage;
    }
    pageIndex(index) {
        if (index < 0 || index >= this.value.length) {
            return -1;
        }
        return Math.floor(index / this.elemsOnPage);
    }
}