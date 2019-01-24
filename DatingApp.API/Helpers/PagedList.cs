using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Helpers
{
    public class PagedList<T> : List<T>
    {
        public int CurrentPage { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalPages { get; set; }
        public int TotalItems { get; set; }

        public PagedList(List<T> items, int currentPage, int itemsPerPage, int totalItems)
        {    
            this.CurrentPage = currentPage;
            this.ItemsPerPage = itemsPerPage;
            this.TotalPages = (int)Math.Ceiling(totalItems / (double)itemsPerPage);
            this.TotalItems = totalItems;

            this.AddRange(items);
        }

        public static async Task<PagedList<T>> CreateAsync(IQueryable<T> source, int currentPage, int itemsPerPage)
        {
            var totalItems = await source.CountAsync();

            var items = await source.Skip((currentPage - 1) * itemsPerPage).Take(itemsPerPage).ToListAsync();

            return new PagedList<T>(items, currentPage, itemsPerPage, totalItems);
        }
    }
}