﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prototype_patter
{
    public class ColorManager
    {
        private Dictionary<string, ColorPrototype> colors = 
            new Dictionary<string, ColorPrototype>();

        public ColorPrototype this[string key]
        {
            get { return colors[key]; }
            set { colors[key] = value; }
        }
    }
}
