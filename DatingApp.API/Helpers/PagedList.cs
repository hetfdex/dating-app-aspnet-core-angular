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
        public int PageSize { get; set; }
        public int TotalPages { get; set; }
        public int TotalCount { get; set; }

        public PagedList(List<T> items, int currentPage, int pageSize, int totalCount)
        {
            this.CurrentPage = currentPage;
            this.PageSize = pageSize;
            this.TotalPages = (int)Math.Ceiling(totalCount / (double)pageSize);
            this.TotalCount = totalCount;

            this.AddRange(items);
        }

        public static async Task<PagedList<T>> CreateAsync(IQueryable<T> source, int currentPage, int pageSize)
        {
            var totalCount = await source.CountAsync();

            var items = await source.Skip((currentPage - 1) * pageSize).Take(pageSize).ToListAsync();

            return new PagedList<T>(items, currentPage, pageSize, totalCount);
        }
    }
}